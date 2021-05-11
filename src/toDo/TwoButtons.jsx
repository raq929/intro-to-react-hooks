import React, { useState, useContext } from 'react';
import { Button } from '@edx/paragon'

/* INSTRUCTIONS for useContext
  Implement two components that consume the ClickContext:
    - ContextButton
      - should increment the count when clicked
      - add at least two of them
    - ClickReport
      - should display the click count
*/
const themes = {

  light:{
  
    color: 'purple',
    backgroundColor: 'green',
  },
  dark: {
    color: 'green',
    backgroundColor: 'yellow',
  }
 
};

const ClickContext = React.createContext();
const ThemeContext = React.createContext();

const ClickContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  return <ClickContext.Provider value={[count, setCount]}>{children}</ClickContext.Provider>
}

const ThemeContextProvider = ({ children}) => {
  
  return <ThemeContext.Provider value = {themes}>{children}</ThemeContext.Provider>
 
}

const ContextButton = ({ text }) => {
  const [aclick, setAclick] = useContext(ClickContext)
  return <Button onClick = {() => setAclick((prev) => prev + 1)}>{text}</Button>

}

const ClickReport = () => {
  const [display] = useContext(ClickContext)
  
  return <p>The count is {display}</p>

}
const ClearButton = ({text, className}) => {
  const [clear, setClear] = useContext(ClickContext)
  return <Button onClick = {() => setClear(0)}>{text}</Button>
}
const ThemedButton = ({text}) => {
 const color = useContext(ThemeContext)
  return <button style = {color.dark}>{text}</button>
}



const TwoButtons = () => {
  return (
    <>
      <h1>useContext</h1>
      <ClickContextProvider>
        {/* Put Buttons and ClickReport here */}
        <ContextButton text="Click Me!"></ContextButton>
        
        <ContextButton text = "Click Me too!!"></ContextButton>
        <br/>
        <br/>

        <ClearButton className = "mr-2" text = "Set to 0"></ClearButton>
        <ThemeContextProvider>
          <ThemedButton text="Dark"></ThemedButton>
          </ThemeContextProvider>
       
         
          <ClickReport/>
       
      </ClickContextProvider>

      {/* What happens if you put buttons here? */}
    </>
  )
};

export default TwoButtons
