import mongoose from "mongoose";
import React from "react";


export default function Register(){

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const userSchema = new mongoose.Schema(
        {
            name : String,
            password: String,
        }
    )
    const User = mongoose.model("User" , userSchema);

    function sendDataToServer(){
        fetch('http://http://localhost:4000/')
        .then()
    }

    function handleSubmit(e){
        e.preventDefault()
        
    }
    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/> <br />
                <button type="submit">Register</button>
            </form>
        </>
    )
}