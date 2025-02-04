import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/Searchbar";



const Navbar = () => {
    const[searchQuery,setSearchQuery]=useState("");

    const navigate = useNavigate;
    const onLogout= ()=> {
        navigate("/login")
    }

    const handelSearch=()=>{};

    // const onClearSearch=()=>{
    //     setSearchQuery("");
    // };
     return(
        <div className="bg-white flex items-center justify-between px-6 py-4 drop-shadow">
            <h2 classname="text-xl font-medium text-black py-2 center">Notes</h2>
            <SearchBar   value={searchQuery}
                onChange={({ target })=>{
                    setSearchQuery(target.value);
                }}
                handelSearch={handelSearch}
                //onClearSearch={onClearSearch}
            />
            <ProfileInfo onLogout={onLogout} />
            
        </div>
        
     )
}
export default Navbar;