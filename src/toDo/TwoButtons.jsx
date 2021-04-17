import React, { useState, useContext } from 'react';
import { Button } from '@edx/paragon'

/* INSTRUCTIONS
  Implement two components that consume the ClickContext:
    - ContextButton
      - should increment the count when clicked
      - add at least two of them
    - ClickReport
      - should display the click count
*/

const ClickContext = React.createContext();

const ClickContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  return <ClickContext.Provider value={[count, setCount]}>{children}</ClickContext.Provider>
}

const ContextButton = () => {

}

const ClickReport = () => {

}

const TwoButtons = () => {
  return (
    <>
      <h1>useContext</h1>
      <ClickContextProvider>
        {/* Put Buttons and ClickReport here */}
      </ClickContextProvider>
      {/* What happens if you put buttons here? */}
    </>
  )
};

export default TwoButtons
