import React from 'react'
import { useHistory } from "react-router-dom";


export default function Register(props){

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isError, setIsError]  = React.useState(false)
    const history = useHistory()
    
    function handleSubmit(e){
        e.preventDefault()
       
            sendDataToServer()
        
        
    }

    function sendDataToServer(){
        fetch('http://localhost:4000/login' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
              },
            body: JSON.stringify({
                username,
                password

            })
        })
        .then((response) => {
            if (!response.ok) {
                // make the promise be rejected if we didn't get a 2xx response
                const err = new Error("Error User does not exists");
                err.response = response;
                throw err;
            } 
                props.credSetup({
                    username,
                    password
                })
                history.push('/todo')
        }
        
        ).catch((error)=>{
            console.log(error)
            setIsError(prevErr=>prevErr=true)
            
        })}
    
    return (
    
        <>
            <h1>Login</h1>
            
            <form onSubmit={handleSubmit}>
            {isError && <p style={{color:"red"}}>Plz check credentials</p>}
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/> <br />
                <button type="submit">Login</button>
            </form>
        </>
        )
    }