import React from "react";
import './Rightbar.css';

function Rightbar() {
    return (
        <>
            <div className="rightbar">
                <div className="right-wrappper">
                    <div className="birthday-container">
                        <img src="gift.jpeg" alt="gift" className="birthday-img" />
                        <span className="birthday-text"><b>MS Dhoni</b> and <b> 2 other Friends</b> have a birthday today</span>
                    </div>
                    <img className="rightbar-ad" src="ad.jpeg" alt="ads" />
                    <h4 className="rightbar-title">Online Friends</h4>
                    <ul className="friend-list">
                        <li className="rightbar-friend">
                            <div className="rightbar-profile-img-container">
                                <img src="OIP (1).jpeg" alt="dhoni " className="rightbar-profile-img" />
                                <span className="rigghtbar-user-name">MS Dhoni</span>
                            </div>
                        </li>
                        <li className="rightbar-friend">
                            <div className="rightbar-profile-img-container">
                                <img src="/download.jpeg" alt="raina" className="rightbar-profile-img" />
                                <span className="rigghtbar-user-name">Suresh Raina</span>
                            </div>
                        </li>
                        <li className="rightbar-friend">
                            <div className="rightbar-profile-img-container">
                                <img src="download (1).jpeg" alt="rishabh " className="rightbar-profile-img" />
                                <span className="rigghtbar-user-name">Rishabh Pant</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Rightbar;