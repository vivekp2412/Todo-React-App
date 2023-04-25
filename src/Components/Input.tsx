import React from 'react';
import "./Input.css"
function Input(props:any) {
    return (
        <form>
            <input className='taskInput' type="text" placeholder='Enter the Task' onKeyDown={props.event} autoFocus></input>
        </form>
        )
    }

export default Input;