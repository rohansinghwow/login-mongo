

import React from "react";
import { useHistory } from "react-router-dom";


export default function Register(props){

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isError, setIsError]  = React.useState(false)
    const history = useHistory()
    
    

    function sendDataToServer(){
        fetch('http://localhost:4000/register' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
              },
            body: JSON.stringify({
                username,
                password

            })
        })
        .then(()=>{
            
            history.push('/')
            setIsError(prevErr=>prevErr=false)
             props.credSetup({
                username,
                password
            })
            
        }).catch(()=>{
            console.log("Wow, error")
            
        })
        
        
    }

    function handleSubmit(e){
        e.preventDefault()
        sendDataToServer()
        
    }
    return (
        <>
            <h1>Register</h1>
            
            <form onSubmit={handleSubmit}>
            {isError && <p style={{color:"red"}}>User already exists</p>}
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