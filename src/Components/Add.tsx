import React, { useState } from 'react';
import "./Add.css"

//Returns Add button 
function Add(props:any):JSX.Element {

    return (
      <>
      <button className='add' onClick={props.event}>

       <div className='plus'>+</div>
      </button>
      </>
    );
}

export default Add;