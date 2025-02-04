import React from "react";
import{FaMagnifyingGlass} from "react-icons/fa6";
                                                    // comment this onclearSearch    coz it is not in use   (search bar par cross icon)
const SearchBar=({ value ,onChange ,handelSearch, onClearSearch})=>{
    return(
        <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
            <input
            type="text"
            placeholder="Search Notes"
            className="w-full text-xs bg-transparent py-[11px] outline-none"
            value={value}
            onChange={onChange}
            />
            <FaMagnifyingGlass className="text-slate-400 cursor-pointer hover:text-black"/>
        </div>
    )
}
export default SearchBar;