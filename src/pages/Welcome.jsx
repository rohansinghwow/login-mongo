import React from "react";
import { Link } from "react-router-dom";




export default function Welcome(props){
    
    
    
    return (
        <>
        
        <h1>Welcome {props.credVal}</h1>
        <ul>
        {!props.credVal && <li><Link to="/register">Profile Info</Link></li>}
        </ul>
        
        
        </>
    )
}