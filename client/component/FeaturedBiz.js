import React, { Component, useState, useEffect } from 'react';
import { Button } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router';

// Featured Businesses

const FeaturedBiz = ({chosenId}) => {
  // const [menu, setMenu] = useState([]);
  const navigate = useNavigate();
  const [id, setId] = useState('');

  useEffect(() => {
    return fetch(`/api/${chosenId}`) // object should return menu for bodega with specified id
      .then(response => response.json())
      .then(data => {
        res.locals.selectedFeatureMenu = data.rows
        // setId(data);
        console.log('data', data.rows)
      }) // check menu object shape
      .catch(err => `Error: ${err}`)
  }, [id])
  


  const handleClick = () => {
    // preventDefault();
    console.log('handleClick worked')
    // console.log(id);
    setId(chosenId)
    navigate(`/api/${chosenId}`);
    navigate('/BodegaOneMenu')
   
  }
  console.log("id", id)
  // console.log('menu, id, chosenId', id);
  // <Link to='/about'>Go to Aboutpage</Link>
  return (
    <div className='featured-biz' style={{border: '1px solid black'}}>
      <h1 className='featured-biz-header'>Bodega {chosenId}</h1>
      {/* <button onClick={handleClick}>View Menu</button> */}
      {/* <Button onClick={() => navigate(`/${chosenId}`)} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>View Menu</Button> */}

      <Button onClick={handleClick} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>View Menu</Button>
      {/* <button className='featured-view-menu' onClick={setId(chosenId)}>View Menu</button> */}
      <img src='' alt='placeholder image' />
      
    </div>
  )

}



export default FeaturedBiz;