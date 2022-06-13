import React, { Component } from 'react';
import FeaturedBiz from '../component/FeaturedBiz';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
// import Bodega from '../component/BodegaOneMenu';
import { useState, useEffect } from 'react';


// Featured Business Webpage
const FeaturedContainer = () => {
  // func for randomizing array of x numbers depending on number of bodegas in db
    // create new array to hold numbers

  // create empty array to hold FeaturedBiz components with unique keys corresponding to numbers
  // test with hardcoded keys first
  const [names, setNames] = useState([]);

  const fetchNames = async () => {
    try {
      await fetch(`/bodega-names`) // object should return menu for bodega with specified id
      .then(response => response.json())
      .then(data => {
          // res.locals.bodega = data.rows
          setNames(data); // [{}, {}]
          console.log('data', data);
          // console.log('data', data.rows)
      }) // check menu object shape
      .catch(err => `Error: ${err}`)
    } catch (error) {
      console.log('error in featuredbiz.js')
    }
  }

  // fetchNames();
  useEffect(() => {
    fetchNames();
  }, [])

  const imgArr = ['https://media-cdn.tripadvisor.com/media/photo-s/1c/2b/7b/24/pequeno-local-limpio.jpg', 'https://ediblemanhattan.com/wp-content/uploads/2017/09/FullSizeRender.jpg', 'https://media.npr.org/assets/img/2017/03/08/img_8492_custom-000cd75000a1c019ce1905f207a884fcb0987801-s1100-c50.jpg']
  // const nums = [1,2,3]
  // const smallBizArray = nums.map(num => <FeaturedBiz chosenId={num}  />)
  console.log('names:', names)
  const namesArray = names.map((el, i) => <FeaturedBiz chosenId={el.bodega_id} name={el.bodega_name} img={imgArr[i]} />)

  return (
    <div className='featured-container' >
    {/* <div className='featured-container' style={{textAlign: 'center'}}></div> */}
     
       {namesArray}
    </div>
  )

}



export default FeaturedContainer;