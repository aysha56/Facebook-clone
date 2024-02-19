import React from "react";
import './Center.css';
import './share.js'
import Share from "./share.js";
import Post from "./post";
import Rightbar from "./Rightbar";

function Center() {
    return (
        <>
            <div className="Center">
                <div className="center-wrapper">
                    <Share />
                    <Post />

                </div>
            </div>
        </>
    )
}

export default Center;