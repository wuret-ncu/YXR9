import React, { useState } from 'react';
import './Input.css';

function Input(props){
    const {item} = props;
    
    const listItem = item.map((todo,index) => {
        return(
            <div key = {todo.id} className = "inputData">
                <div>
                    <label>
                        <input type = "checkbox" onChange = {(e)=>props.handleOnChange(index)}/>
                    </label>
                    <a className = "inputdata">{todo.title}</a>
                    <button className = "btn">Edit</button>
                    <button className = "btn" onClick={()=>props.handleOnRemove(index)}>Delete</button>
                </div>
            </div>
        )
    });
    console.log(listItem);
    return(
        <div className="inputlist">
            <ul>{listItem}</ul>
        </div>
    )
}

export default Input;