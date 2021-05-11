import './App.scss';
import React, { useState } from 'react';
import { Nav, Navbar, Container, Form } from '@edx/paragon'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import FinishedGhibliMovies from './finished/GhibliMovies';
import FinishedTwoButtons from './finished/TwoButtons'
import FinishedKittenVotes from './finished/KittenVotes';
import FinishedStatefulButton from './finished/StatefulButton';

import TwoButtons from './toDo/TwoButtons';
import GhibliMovies from './toDo/GhibliMovies';
import KittenVotes from './toDo/KittenVotes';
import StatefulButton from './toDo/StatefulButton';

import MainPage from './MainPage';


function App() {
  const [showFinished, setShowFinished] = useState(false);

  return (
    <BrowserRouter>
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container size="xl">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/useState">useState</Link>
            <Link className='nav-link' to="/useEffect">useEffect</Link>
            <Link className='nav-link' to="/useContext">useContext</Link>
            <Link className ='nav-link' to="/useStateButton">useStateButton</Link> 

          </Nav>
          <Form.Switch checked={showFinished} onChange={() => setShowFinished(!showFinished)}>
            Show finished components
          </Form.Switch>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    <Container size='xl'>
      <Switch>
        <Route
          exact
          path="/"
          component={MainPage}
        />
        <Route
          exact
          path="/useState"
          component={showFinished ? FinishedKittenVotes : KittenVotes}
        />
        <Route
          exact
          path="/useEffect"
          component={showFinished ? FinishedGhibliMovies : GhibliMovies}
        />
        <Route
          exact
          path="/useContext"
          component={showFinished ? FinishedTwoButtons : TwoButtons}
        />
        <Route
          exact
          path="/useStateButton"
          component={showFinished ? FinishedStatefulButton : StatefulButton}
        />
     </Switch>
     </Container>
    </BrowserRouter>
  );
}

export default App;
