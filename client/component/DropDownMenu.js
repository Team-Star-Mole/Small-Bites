import React, { Component } from 'react';
import { useState, useEffect } from 'react';


const DropDownMenu = ({menu}) => {
    const [list, setList] = useState([]);
    // useEffect(() => {
    // /* fetch bodegas name */
    //     fetch('/restname')
    //     .then((response) => response.json())
    //     .then(response => (response))
    //     .catch(err => (`Error: ${err}`))
    // })\

    console.log('list', list)
return (
    <div className="list"> 
    <h1>Featured Bodegas</h1>
    {/* <select></select> for dropdown?*/}
    <input type="text" value={list} onChange={(e) => {return setList(e.target.value)}}/>
    <p> 
        {list.map((el) => {
            return <div> {val.bodega_name}</div>
        })}
    </p>
    {menu.map((obj, i) => {
        return <div key={`item i`}>{obj.item_description}</div>
    })}
    </div>
)

};


export default DropDownMenu;
