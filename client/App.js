import React, { Component } from 'react';
import { useState, useEffect } from 'react';
// import './stylesheets/styles.css';
import Test from './component/Test'
import NavBar from './component/Navbar';
import FeaturedContainer from './containers/FeaturedContainer';



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
    <div>
      <h1>Humans for Small Biz</h1>
      <NavBar />
      <FeaturedContainer />
      <Test />
      <div>Footer Content in App.js</div>
    </div>
  );
};

export default App;
