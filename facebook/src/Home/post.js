import React from "react";
import './post.css';
import { FiMoreVertical } from "react-icons/fi";

function Post() {
    return (
        <>
            <div className="post">
                <div className="post-wrapper">
                    <div className="post-top">
                        <div className="post-top-left">
                            <img src="kohli.jpeg" alt="kholi" className="post-profile-img" />
                            <span className="post-user-name">Virat Kohli</span>
                            <span className="post-date">10 mins ago</span>
                        </div>
                        <div className="post-top-right">
                            <FiMoreVertical />
                        </div>
                    </div>
                    <div className="post-center">
                        <span className="post-text">The Only Thing we have is the MOMENT</span>
                        <img src="kohli1.jpeg" alt="kohli" className="post-img" />
                    </div>
                    <div className="bottom">
                        <div className="post-bottom">
                            <img src="heart.jpeg" alt="heart" className="heart-icon" />
                            <img src="like.jpeg" alt="like" className="like-icon" />
                            <span className="post-like-counter">482742982 people liked it</span>
                        </div>

                        <div className="post-comment-counter">578 comments</div>
                    </div>



                </div>
            </div >
        </>
    )
}

export default Post;