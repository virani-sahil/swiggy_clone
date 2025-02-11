// import React from 'react'

import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {

    const [info, setInfo] = useState({ email: "", password: "" });
    const [errMessage, setErrMessage] = useState("")

    function handleEmail(event) {
        const emailData = event.target.value;
        setInfo({ ...info, email: emailData })
    }

    function handlePassword(event) {
        const passwordData = event.target.value;
        setInfo({ ...info, password: passwordData });
    }

    const navigate = useNavigate()

    function handleLoginbtn() {
        const loginData = JSON.parse(localStorage.getItem("UserInfo"));
        if (loginData.email === info.email && loginData.password === info.password) {
            setErrMessage("")
            navigate("/")
            return;
        } else {
            if (loginData.email !== info.email && loginData.password !== info.password) {
                setErrMessage("Access Denied")
            } else if (loginData.email !== info.email) {
                setErrMessage("Email is incorrect")
            } else {
                setErrMessage("Password is incorrect")
            }
        }
    }

    return (
        <div className="flex items-center justify-center h-[100vh]">
            <div className="bg-amber-500 max-w-[400px] w-full h-[400px] rounded-4xl p-10">
                <h1 className="text-5xl font-bold text-center pb-10">LogIn</h1>
                <div className="grid justify-center pb-5">
                    <label htmlFor="email" className="pb-2" >Enter email : </label>
                    <input type="text" value={info?.email} placeholder="Enter your email" onChange={handleEmail} className="bg-white rounded p-1 w-[300px]" />
                </div>
                <div className="grid justify-center">
                    <label htmlFor="password" className="pb-2">Enter password : </label>
                    <input type="password" value={info?.password} placeholder="Enter your password" onChange={handlePassword} className="bg-white rounded p-1 w-[300px]" />
                </div>
                <div className={`${errMessage === "" ? 'hidden' : 'absolute ps-3'} text-red-700`}>
                    {errMessage}
                </div>
                <div className="flex justify-center pt-10">
                    <button onClick={handleLoginbtn} className="bg-amber-600 p-2 rounded-xl w-[200px] text-white font-bold text-xl">LogIn</button>
                </div>

            </div>
        </div>
    )
}

export default Login