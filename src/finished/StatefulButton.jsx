import React, { useState } from 'react';
import {Button, ButtonGroup} from '@edx/paragon'


const StatefulButton = () => {
  const [clicks, setClicks] = useState(0)

  return (
    <>
    <h1>useState</h1>
    <div className="py-3">I have been clicked {clicks} times!</div>
    <Button className="mr-2" variant="primary" onClick={() => setClicks(clicks + 1)}>Click Me</Button>
    <Button variant="secondary" onClick={() => setClicks(0)}>Clear</Button>
    </>
  )
};



export default StatefulButton
