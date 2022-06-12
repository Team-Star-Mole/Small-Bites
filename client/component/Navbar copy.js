import React, { Component } from 'react';

const NavBar = () => {

  

  return (
    <div className='navbar-container'>
      {/* <form action='/' method='GET'> */}
        <label htmlFor='nav-search-bar'>
          <span className='visually-hidden'></span>
        </label>
        <input
          id='nav-search-bar'
          type='text'
          name='search'          
          placeholder='Support a small biz'
        />
        <button type='submit'>Search!</button>
      {/* </form> */}
    </div>
  )

}



export default NavBar;