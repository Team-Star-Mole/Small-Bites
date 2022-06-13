import React, { Component, useState, useEffect } from 'react';
// import { Button } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Collapse } from '@mantine/core';
import BodegaOneMenu from './BodegaOneMenu';

// Featured Businesses

const FeaturedBiz = ({chosenId}) => {
  // const [menu, setMenu] = useState([]);
  // const navigate = useNavigate();
  const [id, setId] = useState('');
  const [opened, setOpen] = useState(false);


  const fetchId = async () => {
    try {
      await fetch(`/api/${chosenId}`) // object should return menu for bodega with specified id
        .then(response => response.json())
        .then(data => {
            res.locals.selectedFeatureMenu = data.rows
            // setId(data);
            console.log('data', data.rows)
        }) // check menu object shape
        .catch(err => `Error: ${err}`)
    } catch(error) {
      console.log('error in featuredbiz.js')
    }
  }

  // front end (fetch to /getpage) => back end (redirect to /bodegaoneMenu) => front end (fetch to /api/chosenID) => back end (get bodegamenu data) => front end (render data)

  useEffect(() => {
    fetchId();
  }, [id])


  // useEffect(() => {
  //   return fetch(`/api/${chosenId}`) // object should return menu for bodega with specified id
  //     .then(response => response.json())
  //     .then(data => {
  //       res.locals.selectedFeatureMenu = data.rows
  //       // setId(data);
  //       console.log('data', data.rows)
  //     }) // check menu object shape
  //     .catch(err => `Error: ${err}`)
  // }, [id])
  


  const handleClick = () => {
    // preventDefault();
    console.log('handleClick worked')
    // console.log(id);
    setId(chosenId)
    // navigate(`/api/${chosenId}`);
    // navigate('/BodegaOneMenu')
   
  }
  console.log("id", id)
  // console.log('menu, id, chosenId', id);
  // <Link to='/about'>Go to Aboutpage</Link>
  return (
    <div className='featured-biz' style={{border: '1px solid black'}}>
      <h1 className='featured-biz-header'>Bodega {chosenId}</h1>
      {/* <button onClick={handleClick}>View Menu</button> */}
      {/* <Button onClick={() => navigate(`/${chosenId}`)} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>View Menu</Button> */}
    {/* <BodegaOneMenu data = {feaf}/> */}
      {/* <Button onClick={handleClick} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}><Link to={`/bodegareact`}>
            View Menu </Link></Button> */}

        {/* <Button onClick={handleClick} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>View Menu</Button> */}

{/* <Button onClick={() => useNavigate('/bodegareact')} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}></Button> */}
     

      {/* <button className='featured-view-menu' onClick={setId(chosenId)}>View Menu</button> */}
      <img src='' alt='placeholder image' />
      
      <Card shadow="md" p="lg">

        <Button 
          variant="light" 
          color="blue" 
          fullWidth 
          style={{ marginTop: 14 }} 
          onClick={() => setOpen((o) => !o)}
        >
          View Menu
        </Button>
        <Collapse in={opened}>
          <BodegaOneMenu
            chosenId={chosenId}
          />
          {/* content... */}
        </Collapse>

      </Card>
    </div>
  )

}



export default FeaturedBiz;