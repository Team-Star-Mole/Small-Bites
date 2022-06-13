import React, { Component } from 'react';
import FeaturedBiz from '../component/FeaturedBiz';

// Featured Business Webpage
const FeaturedContainer = () => {
  // func for randomizing array of x numbers depending on number of bodegas in db
    // create new array to hold numbers

  // create empty array to hold FeaturedBiz components with unique keys corresponding to numbers
  // test with hardcoded keys first
  const nums = [1,2,3]
  const smallBizArray = nums.map(num => <FeaturedBiz chosenId={num} />)

  return (
    <div className='featured-container'>
      {/* components rendered in featured container */}
      featured-container
      {smallBizArray}
    </div>
  )

}



export default FeaturedContainer;