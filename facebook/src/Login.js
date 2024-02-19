
import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="login">
                <div className="facebook">
                    <div className="spacebook-text">
                        FaceBook
                    </div>
                    <div className="title">
                        Facebook helps you to connect and <br /> share with the people in your life.
                    </div>
                </div>
                <div className="loginContainer">
                    <div className="loginDetails">
                        <input type="email" placeholder="Email address or phone number" name="email" />
                        <br></br>
                        <input type="password" placeholder="password" name="password" maxLength={"10"} />
                        <br></br>
                        <Link to={'/home'}  ><button className="btn"><strong>Login</strong></button></Link>
                    </div>
                    <div className="forget">
                        <a href="forgot">Forgotten Password?</a>
                        <br />
                        <Link to='/signup' className="btns" style={{ color: "White" }} >Create New Account</Link>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Login;