import React, { Component, useState, useEffect } from 'react';

const FeaturedBiz = ({chosenId}) => {
//   const State = () => {
//     const [menu, setMenu] = useState([]);
//     const [id, setId] = useState('')
//   }

  // useEffect(() => {
  //   return fetch('/:id') // object should return menu for bodega with specified id
  //     .then(response => response.json())
  //     .then(data => res.locals.selectedFeatureMenu = data.rows) // check menu object shape
  //     .catch(err => `Error: ${err}`)
  // }, [id])
  
  return (
    <div className='featured-biz'>
      <h1 className='featured-biz-header'>Bodega {chosenId}</h1>
      {/* <div className='featured-view-menu' onClick={setId(id = chosenId)}></div> */}
      <img src='' alt='placeholder image' />

    </div>
  )

}



export default FeaturedBiz;