// import { useState } from 'react';

// import { nanoid } from 'nanoid';
// import './Input.css';

// const arr = [];
// function Data(props) {
//     arr.push(props.id);
//     console.log(arr);
//     const deleteItem = (id) =>{
//         return arr.filter(item => id !== item.id);
//         // console.log(id);
//         // console.log(newList);
//         // this.useState({arr: newList});
//     }
//     return(
//         <div className="inputData">
//             <input type="checkbox" id="nanoid()" completed="false"/>
//             <a className="inputdata">{props.name}</a>
//             <button className="btn">Edit</button>
//             <button className="btn" onClick={()=>deleteItem(props.id)}>Delete</button>
//         </div>
//     )

// }

// function Input(props){
//     const list=props.name.map(value=>
//         <Data id={nanoid()} key={value} name={value} completed={false}/>)
//     // const [doList, setdoList] = useState(list);
//     console.log(list);
//     return(
//         <div className="inputlist">
//             <ul>{list}</ul>
//         </div>
//     )
// }

// export default Input;

//-------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
// import './Input.css';
// import { name } from 'commander';

// function Input(props){
//     const deleteItem=(id)=>{
//         console.log(id);
//         // alert("you success~");  //test1
//         const list = props.name;
//         // alert(list);    //test2
//         // const newList = list.filter(item => item.id !== id);
//     }
//     return(
//         props.name.map(value=>{
//             return(
//             <div className="inputlist">
//                 <input type="checkbox" id="nanoid()"/>
//                 <a className="inputdata" key="value" name="value" completed="false">{value}</a>
//                 <button className="btn">Edit</button>
//                 <button className="btn" onClick={()=>deleteItem(props.value.id)}>Delete</button>
//             </div>
//         )})
//     )
// }

// export default Input;

// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import './Input.css';
// import deleteItem from '../App.js';


// function Data(props) {
//     return(
//         <div className="inputData">
//             <input type="checkbox" id="nanoid()" completed="false"/>
//             <a className="inputdata">{props.name}</a>
//             <button className="btn">Edit</button>
//             <button className="btn" onClick={props.deleteItem}>Delete</button>
//         </div>
//     )
// }

// function Input(props){
//     const list=props.name.map(value=>
//         <Data id={nanoid()} key={value} name={value} completed={false}/>)
//     // const [doList, setdoList] = useState(list);
//     console.log(list);
//     return(
//         <div className="inputlist">
//             <ul>{list}</ul>
//         </div>
//     )
// }

// export default Input;
import React, { useState } from 'react';
import './Input.css';

function Input(props){
    const {item,value,id,completed}=props;

    const listItem=item.map((value,index,completed)=>{
        return(
            <div key={id}>
                <div  className="inputData">
                    <label>
                        <input type="checkbox" onChange={(event)=>props.handleOnChange(event,index)}/>
                    </label>
                    <a className="inputdata">{value}</a>
                    <button className="btn">Edit</button>
                    <button className="btn" onClick={()=>props.handleOnRemove(index)}>Delete</button>
                </div>
            </div>
        )
    });

    return(
        <div className="inputlist">
            {item.length>0 && listItem}
        </div>
    )
}

export default Input;