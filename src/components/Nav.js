import React from 'react';
import './Nav.css'

function Nav(props){
    return(
        <div className="nav">
            <button type="button">全部</button>
            <button type="button">已完成</button>
            <button type="button">未完成</button>
        </div>
    )
}

export default Nav;