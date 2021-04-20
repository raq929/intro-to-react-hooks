import React, { useState } from 'react';
import { CardGrid, Card, Button } from '@edx/paragon'


const KittenVotes = () => {
  const [meowserClicks, setMeowserClicks] = useState(0);
  const [princessClicks, setPrincessClicks] = useState(0)
  const clearAll = () => {
    setMeowserClicks(0)
    setPrincessClicks(0)
  }

  return (
    <>
      <h1>useState</h1>
      <div className="py-3">Meowser was clicked {meowserClicks} times!</div>
      <div className="py-3">Princess Purr was clicked {princessClicks} times!</div>
      <div className="py-3">Total votes: {meowserClicks + princessClicks}</div>
      <CardGrid>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="http://placekitten.com/200/300" />
          <Card.Body>
            <Card.Title>Meowser</Card.Title>
            <Card.Text>
              Vote for Meowser!
            </Card.Text>
            <Button className="mr-2" variant="primary" onClick={() => setMeowserClicks((prevClicks) => prevClicks + 1)}>Vote</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="http://placekitten.com/200/299" />
          <Card.Body>
            <Card.Title>Princess Purr</Card.Title>
            <Card.Text>
              Vote for Princess Purr!
            </Card.Text>
            <Button className="mr-2" variant="primary" onClick={() => setPrincessClicks((prevClicks) => prevClicks + 1)}>Vote</Button>
          </Card.Body>
        </Card>
      </CardGrid>

      <Button variant="secondary" onClick={clearAll}>Clear</Button>
    </>
  )
};

export default KittenVotes;
