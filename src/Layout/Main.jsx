import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar";
import Footer from "../Pages/Home/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Main = () => {

  const {dark} = useContext(AuthContext)


console.log(dark);

  return (
    <div className={dark ? 'bg-[#252e45] text-white' : 'bg-[#eff5fa]' }>
      <Navbar></Navbar>
      <Outlet dark={dark}></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
