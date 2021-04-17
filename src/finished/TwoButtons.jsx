import React, {useState, useContext } from 'react';
import { Button } from '@edx/paragon';

const ButtonContext = React.createContext()

const ButtonData = ({ children }) => {
  const [count, setCount] = useState(0)
  return <ButtonContext.Provider value={[count, setCount]}>{children}</ButtonContext.Provider>
}

const ContextButton = ({ text, className }) => {
  const [count, setCount] = useContext(ButtonContext)

  return <Button className={className} onClick={() => setCount(count + 1)}>{text}</Button>
}

const ClickReport = () => {
  const [count] = useContext(ButtonContext)
  return <p>The total count is {count}</p>
}


const TwoButtons = () => {
  return (
    <>
      <h1>useContext</h1>
      <ButtonData>
        <ClickReport />
        <ContextButton className="mr-2" text="Click me"/>
        <ContextButton text="Click me too!"/>
      </ButtonData>
    </>
  )
};

export default TwoButtons
