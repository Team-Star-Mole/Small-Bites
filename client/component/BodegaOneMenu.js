import React from 'react';
import { useState, useEffect } from 'react';
import { TimeInput } from '@mantine/dates';
import { Button } from '@mantine/core';

const BodegaOneMenu = ({chosenId, name}) => {
  const [menu, setMenu] = useState([]);
  const [count, Setcount] = useState(0);
  
  const fetchMenu = () => {
    fetch(`/api/${chosenId}`) // object should return menu for bodega with specified id
        .then(response => response.json())
        .then(data => {
            setMenu(data);
            // console.log('data', data.rows)
        }) // check menu object shape
        .catch(err => `Error: ${err}`)
  }
  // fetchMenu();

  useEffect(() => {
    fetchMenu();
  }, [])

  // console.log("menu", menu)
  return (
    <>
      <h1 style={{textAlign: 'center'}}>{name} Menu Items</h1>
      {menu.map(el => {
        return (
          <div style={{textAlign: 'center'}}>{el.item_description} ${el.price} </div>
        )
      })}
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <TimeInput label="" format="12" defaultValue={new Date()} />
      <Button>Schedule Pick Up Time</Button>
      </div>


    </>
  )
}

export default BodegaOneMenu