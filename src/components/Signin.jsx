// import React from 'react'

import { useState } from "react";
import { useNavigate } from "react-router";


const Signin = () => {

    const [info, setInfo] = useState({ email: "", password: "" });

    function handleEmail(event) {
        const emailData = event.target.value;
        setInfo({ ...info, email: emailData })
    }

    function handlePassword(event) {
        const passwordData = event.target.value;
        setInfo({ ...info, password: passwordData });
    }

    // use navigate for switch page
    const navigate = useNavigate()

    function handleSigninbtn() {
        if (info.email === "" || info.password === "") {
            alert("field out full details.");
            return;
        }
        localStorage.setItem("UserInfo", JSON.stringify(info))
        setInfo({ email: "", password: "" })
        alert("Register Successfully")
        navigate('/login')
    }

    return (
        <div className="flex items-center justify-center h-[100vh]">
            <div className="bg-amber-500 max-w-[400px] w-full h-[400px] rounded-4xl p-10">
                <h1 className="text-5xl font-bold text-center pb-10">Register</h1>
                <div className="grid justify-center pb-5">
                    <label htmlFor="email" className="pb-2">Enter email : </label>
                    <input type="text" value={info?.email} placeholder="Enter your email" onChange={handleEmail} className="bg-white rounded p-1 w-[300px]" />
                </div>
                <div className="grid justify-center">
                    <label htmlFor="password" className="pb-2">Enter password : </label>
                    <input type="password" value={info?.password} placeholder="Enter your password" onChange={handlePassword} className="bg-white rounded p-1 w-[300px]" />
                </div>
                <div className="flex justify-center pt-10">
                    <button onClick={handleSigninbtn} className="bg-amber-600 block p-2 rounded-xl max-w-[200px] w-full text-white font-bold text-xl">Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Signin