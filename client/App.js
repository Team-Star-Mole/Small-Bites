import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Test from './component/Test'
import NavBar from './component/Navbar';
import FeaturedContainer from './containers/FeaturedContainer';
import BodegaOneMenu from './component/BodegaOneMenu';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom';

const App = props => {
  // const [name, setName] = useState('');
  // const [state, setState] = use({
  //     name: 'sdfklsdjhfjkl',
  // })
  
  // const getUpdates =  () => {
  //      fetch('/tom')
  //           .then(res => res.json())
  //           .then(data => {
  //               setName(data); // name = data
  //           })
  //           .catch(err => console.log(err))
  // }

  // useEffect(() => {
  //   getUpdates();
  // })

  return (
    <div style={{textAlign: 'center', padding: '16px', margin: '10px'}}>
      <div>
        <h1 style={{fontSize: '50px'}}>Small Bites</h1>
      </div >
      <div>Giving exposure to small food businesses and local eateries</div><br></br>
      <NavBar /><br></br>
      <div></div>
      <FeaturedContainer />
      {/* <Test /> */}
      <div>Footer Content in App.js</div>
        {/* <Routes> */}
          {/* <Route path='/' element={<App />}/> */}
          {/* <Route path='/bodegareact' element={<BodegaOneMenu />} /> */}
        {/* </Routes> */}
    </div>
  );
};

export default App;
