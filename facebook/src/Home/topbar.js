import React from "react";
import './topbar.css';
import { CiSearch } from "react-icons/ci";
import { BsFillPersonFill, BsFillChatLeftTextFill, BsFillBellFill } from "react-icons/bs";

function Topbar() {
    return (
        <>
            <div className="topbarConatiner">
                <div className="topbarLeft">
                    <span className="logo">FaceBook</span>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar" >
                        <CiSearch className="searchIcon" />
                        <input className="searchinput" placeholder="search for friends or post or video" />
                    </div>
                </div>
                < div className="topbarRight">
                    <div className="topbarlinks">
                        <span className="topbarlink">Homepage</span>
                        <span className="topbarlink">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <BsFillPersonFill />
                            <span className="topbarIconBadge">6</span>
                        </div>
                        <div className="topbarIconItem">
                            <BsFillChatLeftTextFill />
                            <span className="topbarIconBadge">28</span>
                        </div>
                        <div className="topbarIconItem">
                            <BsFillBellFill />
                            <span className="topbarIconBadge">56</span>
                        </div>
                    </div>

                    <img src="th.jpg" alt="anime-girl" className="topbarImg" />
                </div>

            </div>
        </>
    )
}

export default Topbar;