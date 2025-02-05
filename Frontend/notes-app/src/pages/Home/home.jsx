import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";

const Home = () => {
    return(
       <>
       <Navbar />
       <div className="container max-auto">
        <NoteCard></NoteCard>

       </div>
       </>
    )
}
export default Home;