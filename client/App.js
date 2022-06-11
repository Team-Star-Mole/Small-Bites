import React, { Component } from 'react';
import { useState, useEffect } from 'react';
// import './stylesheets/styles.css';
import Test from './component/Test'
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
    <div>Hello World!
      <Test />
    </div>
  );
};

export default App;
