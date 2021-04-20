import React, { useState } from 'react';
import { Card, Button, CardGrid} from '@edx/paragon';

/* INSTRUCTIONS for useState
    Using the `useState` hook, create a buttons that increment each kitten's vote count
    Display the vote counts.

    BONUS:
      - Add a button that clears the count
      - Display the total number of votes
*/

const KittenVotes = () => {


  return (
    <>
      <h1>useState</h1>
      <div className="py-3">Meowser was clicked 0 times!</div>
      <div className="py-3">Princess Purr was clicked 0 times!</div>
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
          </Card.Body>
        </Card>
      </CardGrid>


    </>
  )
};

export default KittenVotes;
