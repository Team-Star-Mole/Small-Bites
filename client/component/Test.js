import React, { useState, useEffect } from 'react';


const Test = () => {
  const [name, setName] = useState([]); // sets state and renders
  const [menu, setMenu] = useState([]);
  const [number, setNumber] = useState(0)


  useEffect(() => { // serves as componentDidMount and ...?
    fetch('/bodega-names')
    .then((response) => response.json())
    .then(response => setName(response))
    .catch(err => (`Error: ${err}`))
  }, [])

  useEffect(() => { // serves as componentDidMount and ...?
    fetch('/bodega-menu')
    .then((response) => response.json())
    .then(response => setMenu(response))
    .catch(err => (`Error: ${err}`))
  }, [])

  // const getMenu = () => {
  //   fetch('/bodega-menu')
  //   .then((response) => response.json())
  //   .then(response => setMenu(response))
  //   .catch(err => (`Error: ${err}`))
  // }

  // console.log("state", name)
  // state = [
  //    { dummy_id: 2, name: 'omggg its working' },
  //    { dummy_id: 5, name: 'hey' }
  //  ],

  function handleClick() {
    setNumber(number + 1); 
  }
  
  let sum = 0
  // function getSum() {
  //   name.forEach(el => {
  //     sum += Number(el.price)
  //     console.log(sum);
  //   })
  //   return sum;
  // }

  return (
    <div>Testing react
      <button onClick={handleClick}>Click {number}</button>

          <h1>
            {name.map(el => {
              return (
                <h1>{el.bodega_name}</h1>

              )
            })}
            {/* ${getSum()}  */}
          </h1>

          <h2>
            {menu.map(el => {
              return(
                <>
                  <h3>{el.item_description}</h3>
                  <h3>${el.price}</h3>
                  <h3>{el.bodega_id}</h3>
              </>
              )
            })}
          </h2>


         
     </div>
  )
};

export default Test