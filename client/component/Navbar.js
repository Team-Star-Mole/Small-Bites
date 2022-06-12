import React, { Component } from 'react';
import { useState, useEffect } from 'react';


const dropDownmenu = () => {
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
     <input value={list} onChange={(e) => setList(e.target.value)}/> 
            <p> 
            {list.map((el) => {
                return <div> {val.bodega_name}</div>
                     })}
            </p>
            
    </div>
)

};


export default dropDownmenu;
