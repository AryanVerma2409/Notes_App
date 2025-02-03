import React from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";



const Navbar = () => {

    const navigate = useNavigate;
    const onLogout= ()=> {
        navigate("/login")
    }
     return(
        <div className="bg-white flex items-center justify-between px-6 py-4 drop-shadow">
            <h2 classname="text-xl font-medium text-black py-2 center">Notes</h2>

            <ProfileInfo onLogout={onLogout} />
        </div>
        
     )
}
export default Navbar;