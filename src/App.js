import logo from './logo.svg';
import './App.scss';
import { Nav, Navbar, NavLink, Container } from '@edx/paragon'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import FinishedStatefulButton from './finished/StatefulButton';
import FinishedGhibliMovies from './finished/GhibliMovies';
import FinishedTwoButtons from './finished/TwoButtons'



function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink href="/useState">useState</NavLink>
            <NavLink href="/useEffect">useEffect</NavLink>
            <NavLink href="/useReducer">useReducer</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container size='xl'>
      <Switch>
        <Route
          exact
          path="/useState"
          render={FinishedStatefulButton}
        />
        <Route
          exact
          path="/useEffect"
          render={FinishedGhibliMovies}
        />
        <Route
          exact
          path="/useReducer"
          render={FinishedTwoButtons}
        />
     </Switch>
     </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
