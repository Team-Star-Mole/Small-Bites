import React, { Component, useState, useEffect } from 'react';
// import { Button } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Collapse } from '@mantine/core';
import BodegaOneMenu from './BodegaOneMenu';

// Featured Businesses

const FeaturedBiz = ({chosenId, name, img}) => {
  const [id, setId] = useState('');
  const [opened, setOpen] = useState(false);
  // const [names, setNames] = useState([]);

  // const fetchNames = async () => {
  //   try {
  //     await fetch(`/bodega-names`) // object should return menu for bodega with specified id
  //     .then(response => response.json())
  //     .then(data => {
  //         // res.locals.bodega = data.rows
  //         setNames(data); // [{}, {}]
  //         console.log('data', data);
  //         // console.log('data', data.rows)
  //     }) // check menu object shape
  //     .catch(err => `Error: ${err}`)
  //   } catch (error) {
  //     console.log('error in featuredbiz.js')
  //   }
  // }

  // // fetchNames();
  // useEffect(() => {
  //   fetchNames();
  // }, [])
  
  // const handleClick = () => {
  //   // preventDefault();
  //   console.log('handleClick worked')
  //   setId(chosenId)
  // }
  // console.log("names", names)

  return (
    <div className='featured-biz-card'>
      {/* {names.map(el => {
        return( <div>{el.bodega_name}</div>)
      })} */}
      <h1 className='featured-biz-header'>{name} </h1>

      {/* <Button onClick={handleClick} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>View Menu</Button> */}
      {/* <div> */}
        <img className='featured-card-img' src={img} alt='placeholder image' styles={{width: '100px'}} />
      {/* </div> */}
      
      <Card shadow="md" p="lg">

        <Button 
          variant="light" 
          color="green" 
          fullWidth 
          style={{ marginTop: 14 }} 
          onClick={() => setOpen((o) => !o)}
        >
          View Menu
        </Button>

        <Collapse in={opened}>
          <BodegaOneMenu
            chosenId={chosenId}
            name={name}
          />
          {/* content... */}
        </Collapse>

      </Card>
    </div>
  )

}



export default FeaturedBiz;