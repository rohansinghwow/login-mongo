

import React from "react";


export default function Register(){

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isError, setIsError]  = React.useState(false)
    
    

    function sendDataToServer(){
        fetch('http://localhost:4000/register' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({
                username,
                password

            })
        }).catch(()=>{
            console.log('Error')
            setIsError(true)
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