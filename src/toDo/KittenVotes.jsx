import React, { useState } from 'react';
import { Card, Button, CardGrid} from '@edx/paragon';

/* INSTRUCTIONS for useState
    Using the `useState` hook, create a buttons that increment each kitten's vote count
    Display the vote counts.
    Remember that useState can be called more than once!

    BONUS:
      - Add a button that clears the count
      - Display the total number of votes
*/

const KittenVotes = () => {
    const [meow, meowClicks] = useState(0);
    const [princess, princessClicks] = useState(0);

  return (
    <>
      <h1>useState</h1>
      <div className="py-3">Meowser was clicked {meow} times!</div>
      <div className="py-3">Princess Purr was clicked {princess} times!</div>
      {/* Display vote counts here */}
      <CardGrid>
        <Card style={{ width: '18rem' }}>

          <Card.Img variant="top" src="http://placekitten.com/200/300" />
          <Card.Body>
          <Card.Title>Meowser</Card.Title>
            <Card.Text>
              Vote for Meowser!
            </Card.Text>
            {/* Meowser button here */}
            <Button variant = "primary" onClick={() => meowClicks((prevClick) => prevClick + 1)}>Meow</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="http://placekitten.com/200/299" />
          <Card.Body>
          <Card.Title>Princess Purr</Card.Title>
            <Card.Text>
              Vote for Princess Purr!
            </Card.Text>
            {/* Princess Purr button here */}
            <Button onClick = {() => princessClicks((prevClick)=> prevClick + 1)}>Princess</Button>

          </Card.Body>
        </Card>
      </CardGrid>


    </>
  )
};

export default KittenVotes;
