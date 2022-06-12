import React, { useState, useEffect } from 'react';

import DropDownMenu from './DropDownMenu'

const Test = () => {
  return (
    <div>Test.js top
      <button onClick={handleClick}>Click {number}</button>

          <div>
            {name.map(el => {
              return (
                <h1>{el.bodega_name}</h1>

              )
            })}
            {/* ${getSum()}  */}
          </div>

          <div>
            {menu.map(el => {
              return(
                <>
                  <h3>{el.item_description}</h3>
                  <h3>${el.price}</h3>
                  <h3>{el.bodega_id}</h3>
              </>
              )
            })}
          </div>
      <DropDownMenu menu={menu} />

      <h6>Test.js bottom</h6>
     </div>
  )
}

export default Test