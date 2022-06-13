import React from 'react';
import { useState, useEffect } from 'react';


const BodegaOneMenu = ({chosenId}) => {
  const [menu, setMenu] = useState([]);
  
  const fetchMenu = async () => {
    try {
      await fetch(`/api/${chosenId}`) // object should return menu for bodega with specified id
        .then(response => response.json())
        .then(data => {
            // res.locals.selectedFeatureMenu = data.rows
            setMenu(data);
            // console.log('data', data.rows)
        }) // check menu object shape
        .catch(err => `Error: ${err}`)
    } catch(error) {
      console.log('error in featuredbiz.js')
    }
  }

  useEffect(() => {
    fetchMenu();
  }, [])

  console.log("menu", menu)
  return (
    <>
      <div>BodegaOneMenu</div>
      <h1>Bodega {chosenId} Menu Items</h1>
      {menu.map(el => {
        return (
          <div>{el.item_description} {el.price}</div>
        )
      })}
    </>
  )
}

export default BodegaOneMenu