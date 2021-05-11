import React, { useState } from 'react';
import {Button, TextArea} from '@edx/paragon';

/* INSTRUCTIONS for useState
    Using the `useState` hook, create a button that increments a counter and displays the current button count

    BONUS:
      - Add a button that clears the count
*/


const StatefulButton = () => {
  const [increment, setIncrement] = useState(0);
  return (
    <>
      <h1>useState</h1>
      {/* PUT BUTTON HERE */}
      
     
      <div>{increment}</div>
      <br/>
      <Button onClick = {() => setIncrement((prev)=> prev + 1)}> Up!  </Button>
  

      <Button onClick = {() => setIncrement((prev)=> prev - 1)}> Down! </Button>

      <Button onClick = {()=> setIncrement(0)}>Clear</Button>

    </>
  )
};

export default StatefulButton
