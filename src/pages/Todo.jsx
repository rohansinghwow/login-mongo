import React from 'react'
import Welcome from './Welcome'

export default function Todo(props){
    return (
        <>
            
            <h1>Todo List for {props.credVal}</h1>
            <label htmlFor="todo">A todo</label>
            <br />
            <input type="checkbox" />
        </>
    )
}