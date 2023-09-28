import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";

const MainLayout = () => {
    const loc = useLocation()
    useEffect(()=>{
        if(loc.pathname=== "/"){
            document.title= `Phone-home`
        }else{
            document.title =`Phone ${loc.pathname.replace("/", "-")}`
        }
    },[loc.pathname])
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;