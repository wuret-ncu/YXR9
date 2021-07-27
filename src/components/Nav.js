import React, {useEffect, useState} from 'react';
import './Nav.css'

function Nav(props){

    return(
        <div className="nav">
            <button type="button" className="btn">全部</button>
            <button type="button"className="btn">已完成</button>
            <button type="button"className="btn">未完成</button>
        </div>
    )
}

export default Nav;