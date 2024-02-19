import React from "react";
import './share.css'

import { GoFileMedia } from "react-icons/go";
import { AiOutlineTag } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsEmojiHeartEyes } from "react-icons/bs";

function Share() {
    var Style1 = { color: "red" };
    var Style2 = { color: "blue" };
    var Style3 = { color: "green" };
    var Style4 = { color: "yellow" };
    return (
        <>

            <div className="share">
                <div className="share-wrapper">
                    <div className="share-top">

                        <img src="th.jpg" alt="anime-girl" className="share-profile-Img" />
                        <input placeholder="what's on your mind" className="share-input" />
                    </div>
                    <hr className="share-hr" />
                    <div className="share-btn1">
                        {/* <div className="share-options"> */}

                        <div className="share-option">
                            <GoFileMedia
                                className="share-icon" style={Style1} />
                            <span className="share-option-text">Photo/Video</span>
                        </div>
                        <div className="share-option">
                            <AiOutlineTag style={Style2} className="share-icon" />
                            <span className="share-option-text">Tag</span>
                        </div>
                        <div className="share-option">
                            <CiLocationOn className="share-icon" style={Style3} />
                            <span className="share-option-text">Loaction</span>
                        </div>
                        <div className="share-option">
                            <BsEmojiHeartEyes className="share-icon" style={Style4} />
                            <span className="share-option-text">Feeling</span>
                        </div>

                        <button className="share-btn">Share</button>

                        {/* /* </div> */}


                    </div>
                </div>
            </div>
        </>
    )
}

export default Share;