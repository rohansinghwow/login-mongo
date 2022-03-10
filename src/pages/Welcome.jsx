import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

export default function Welcome(){
    return (
        <>
        <h1>Welcome</h1>
        <Link to="/register"><Register/></Link>
        </>
    )
}