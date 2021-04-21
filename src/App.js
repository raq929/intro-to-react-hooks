import './App.scss';
import React, { useState } from 'react';
import { Nav, Navbar, Container, Form } from '@edx/paragon'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import FinishedGhibliMovies from './finished/GhibliMovies';
import FinishedTwoButtons from './finished/TwoButtons'
import FinishedKittenVotes from './finished/KittenVotes';
import TwoButtons from './toDo/TwoButtons';
import GhibliMovies from './toDo/GhibliMovies';
import KittenVotes from './toDo/KittenVotes';
import MainPage from './MainPage';


function App() {
  const [showFinished, setShowFinished] = useState(false);

  return (
    <BrowserRouter>
    <Container>
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/useState">useState</Link>
            <Link className='nav-link' to="/useEffect">useEffect</Link>
            <Link className='nav-link' to="/useContext">useContext</Link>
          </Nav>
          <Form.Switch checked={showFinished} onChange={() => setShowFinished(!showFinished)}>
            Show finished components
          </Form.Switch>
        </Navbar.Collapse>
      </Navbar>
    </Container>
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
     </Switch>
     </Container>
    </BrowserRouter>
  );
}

export default App;
