import React from 'react';
import './Input.css';

function Data(props) {
    return(
        <div className="inputData">
            <input type="checkbox" />
            <a>{props.name}</a>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
    
}

function Input(props){
    const list=props.name.map(value=>
        <Data key={value} name={value}/>)
        console.log(list);
    return(
        <div className="input">
            <ul>{list}</ul>
        </div>
    )
}

export default Input;