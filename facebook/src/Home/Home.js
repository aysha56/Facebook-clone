import React from "react";
import Topbar from "./topbar";
import Leftbar from "./Leftbar";
import Center from "./Center";
import Rightbar from "./Rightbar";
import './Home.css'

function Home() {
    return (
        <>
            <div><Topbar /></div>
            <div className="homeContainer">
                <Leftbar />
                <Center />
                <Rightbar />
            </div>


        </>
    )
}

export default Home;