import React from "react";
import './Leftbar.css';
import { MdRssFeed, MdOutlineVideoSettings, MdGroups2, MdBookmark, MdWorkOutline, MdOutlineEvent } from "react-icons/md";
import { BsChatLeft, BsQuestionSquare } from "react-icons/bs";
import { FaGraduationCap } from 'react-icons/fa';
function Leftbar() {
    return (
        <>
            <div className="leftbar">
                <div className="leftbarWrapper">
                    <ul className="leftbarList">
                        <li className="leftbarListItem">
                            <MdRssFeed className="leftbaricon" />
                            <span className="leftbarItemText">Feed</span>
                        </li>
                        <li className="leftbarListItem">
                            <BsChatLeft className="leftbaricon" />
                            <span className="leftbarItemText">Chat</span>
                        </li>
                        <li className="leftbarListItem">
                            <MdOutlineVideoSettings className="leftbaricon" />
                            <span className="leftbarItemText">Videos</span>
                        </li>
                        <li className="leftbarListItem">
                            <MdGroups2 className="leftbaricon" />
                            <span className="leftbarItemText">Groups</span>
                        </li>
                        <li className="leftbarListItem">
                            <MdBookmark className="leftbaricon" />
                            <span className="leftbarItemText">bookmarks</span>
                        </li>
                        <li className="leftbarListItem">
                            <BsQuestionSquare className="leftbaricon" />
                            <span className="leftbarItemText">Questions</span>
                        </li>
                        <li className="leftbarListItem">
                            <MdWorkOutline className="leftbaricon" />
                            <span className="leftbarItemText">Jobs</span>
                        </li>
                        <li className="leftbarListItem">
                            <MdOutlineEvent className="leftbaricon" />
                            <span className="leftbarItemText">event</span>
                        </li>
                        <li className="leftbarListItem">
                            <FaGraduationCap className="leftbaricon" />
                            <span className="leftbarItemText">Courses</span>
                        </li>

                    </ul>
                    <button className="leftbar-btn">Show More</button>
                    <hr className='leftbarhr' />
                    <ul className="leftbar-friend-list">
                        <li className="leftbar-friend">
                            <img src="OIP.jpeg" alt="rohit" className="leftbar-img" />
                            <span className="leftbar-friend-name">Rohit Sharma</span>
                        </li>
                        <li className="leftbar-friend">
                            <img src="OIP (1).jpeg" alt="rsachin" className="leftbar-img" />
                            <span className="leftbar-friend-name">Ms Dhoni</span>
                        </li>
                        <li className="leftbar-friend">
                            <img src="/download.jpeg " alt="rohit" className="leftbar-img" />
                            <span className="leftbar-friend-name">Suresh Raina</span>
                        </li>
                        <li className="leftbar-friend">
                            <img src="download (1).jpeg" alt="rohit" className="leftbar-img" />
                            <span className="leftbar-friend-name">Rishabh Pant</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Leftbar;