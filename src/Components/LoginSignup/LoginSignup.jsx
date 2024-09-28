import React, { useState } from 'react'
import './LoginSignup.css'

import firstname from '../Assets/firstAndLast.png'
import lastname from '../Assets/firstAndLast.png'
import username from '../Assets/firstAndLast.png'
import password from '../Assets/password.png'
import DOB from '../Assets/DOB.png'
import email from '../Assets/email.png'
import address from '../Assets/homeAddress.png'


const LoginSignup = () => {
    const [action, setAction] = useState("Login");

  return (
    <div className = 'container'>
        <div className = "header">
            <div className = "text"> {action}</div>
            <div className = "underline"> </div>
        </div>
        <div className = "inputs">
        {action === "Sign Up"? <div></div>: 
            <div className = "input">
                <img src={username} alt="" />
                <input placeholder = "Username" type="username" />
            </div>}
            {action === "Sign Up"? <div></div>:
            <div className = "input">
                <img src={password} alt="" />
                <input placeholder = "Password" type="password" />
            </div>}
            
            {action === "Login"? <div></div>: 
            <div className = "input">
                <img src={firstname} alt="" />
                <input placeholder = "First Name" type="first-name" />
            </div>}

            {action === "Login"? <div></div>:
            <div className = "input">
                <img src={lastname} alt="" />
                <input placeholder = "Last Name" type="last-name" />
            </div>}

            {action === "Login"? <div></div>:
            <div className = "input">
                <img src={email} alt="" />
                <input placeholder = "Email" type="email" />
            </div>}

            {action === "Login"? <div></div>:
            <div className = "input">
                <img src={address} alt="" />
                <input placeholder = "Preferred Address" type="address" />
            </div>}

            {action === "Login"? <div></div>:
            <div className = "input">
                <img src={DOB} alt="" />
                <input placeholder = "Date of Birth" type="date-of-birth" />
            </div>}
        </div>

        {action === "Sign Up"? <div></div>:
        <div className = "forgot-password-container">
            <div className = "forgot-password">Forgot Password?</div>
        </div>}
        <div className = "submit-container">
            <div className = {action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className = {action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}
export default LoginSignup