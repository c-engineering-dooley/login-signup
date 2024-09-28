import React, { useState } from 'react'
import './LoginSignup.css'

import firstname from '../Assets/firstAndLast.png'
import lastname from '../Assets/firstAndLast.png'
import DOB from '../Assets/DOB.png'
import email from '../Assets/email.png'
import address from '../Assets/homeAddress.png'
import password from '../Assets/password.png'


const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

  return (
    <div className = 'container'>
        <div className = "header">
            <div className = "text"> {action}</div>
            <div className = "underline"> </div>
        </div>
        <div className = "inputs">
            <div className = "input">
                <img src={firstname} alt="" />
                <input type="first-name" />
            </div>
            <div className = "input">
                <img src={lastname} alt="" />
                <input type="last-name" />
            </div>
            <div className = "input">
                <img src={email} alt="" />
                <input type="email" />
            </div>
            <div className = "input">
                <img src={address} alt="" />
                <input type="address" />
            </div>
            <div className = "input">
                <img src={DOB} alt="" />
                <input type="date-of-birth" />
            </div>
        </div>
        <div className = "forgot-password">Forgot Password? <span>Click Here!</span></div>
        <div className = "submit-container">
            <div className = {action==="Login"?"submit gray":"submit"}>Sign Up</div>
            <div className = {action==="Sign Up"?"submit gray":"submit"}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup