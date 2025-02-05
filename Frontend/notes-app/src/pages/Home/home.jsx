import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";

const Home = () => {
    return(
       <>
       <Navbar />
       <div className="container mx-auto">
                                                {/* {grid cols-3   means hhow many note card in one row } */}
        <div className="grid grid-cols-3 gap-6 mt-9">          
        <NoteCard 
        title="Project submission on 12feb2025" 
        date="14 feb 2025" 
        content="Project submission on 12feb2025"
        tags="#submission"
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}
        />
       </div>
        </div>
        <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg- hover:bg-green-600 absolute right-10 bottom-10" onClick={()=>{}}>
            <MdAdd className="text-[32px] text-white"/>
        </button>
       </>
    )
}
export default Home;