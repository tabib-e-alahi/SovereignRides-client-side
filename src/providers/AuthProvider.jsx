import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";
import { useState } from 'react';
import { useEffect } from 'react';
// , createUserWithEmailAndPassword

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loggedIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth ,googleProvider)
    }

    // const githubSignIn = () =>{
    //     setLoading(true);
    //     return signInWithPopup(auth,githubProvider)
    // }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currenUser =>{
            console.log('Inside on state change:',currenUser);
            setUser(currenUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        loggedIn,
        googleSignIn,
        logOut,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children:PropTypes.node
};