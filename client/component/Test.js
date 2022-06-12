import React, { useState, useEffect } from 'react';


const Test = () => {
  const [name, setName] = useState([]); // sets state and renders
  const [number, setNumber] = useState(0)


  useEffect(() => { // serves as componentDidMount and ...?
    fetch('/check')
    .then((response) => response.json())
    .then(response => setName(response))
    .catch(err => (`Error: ${err}`))
  })

  // console.log("state", name)
  // state = [
  //    { dummy_id: 2, name: 'omggg its working' },
  //    { dummy_id: 5, name: 'hey' }
  //  ],

  function handleClick() {
    setNumber(number + 1); 
  }
  
  let sum = 0
  function getSum() {
    name.forEach(el => {
      sum += Number(el.price)
      console.log(sum);
    })
    return sum;
  }

  return (
    <div>Testing react
      <button onClick={handleClick}>Click {number}</button>

          <p>
            ${getSum()} 
          </p>
         
     </div>
  )
};

export default Test