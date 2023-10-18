

import { Outlet  } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar";
import Footer from "../Pages/Home/Footer";

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;
