import React, {useState, useContext } from 'react';
import { Button } from '@edx/paragon';

const ClickContext = React.createContext()

const ClickContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return <ClickContext.Provider value={[count, setCount]}>{children}</ClickContext.Provider>
}

const ContextButton = ({ text, className }) => {
  const [count, setCount] = useContext(ClickContext);

  return <Button className={className} onClick={() => setCount(count + 1)}>{text}</Button>
}

const ClickReport = () => {
  const [count] = useContext(ClickContext)
  return <p>The total count is {count}</p>
}

const ClearButton = () => {
  const [count, setCount] = useContext(ClickContext);
  return <Button onClick={() => setCount(0)}>Clear</Button>
}


const TwoButtons = () => {
  return (
    <>
      <h1>useContext</h1>
      <ClickContextProvider>
        <ClickReport />
        <ContextButton className="mr-2" text="Click me"/>
        <ContextButton className="mr-2" text="Click me too!"/>
        <ClearButton />
      </ClickContextProvider>
    </>
  )
};

export default TwoButtons
