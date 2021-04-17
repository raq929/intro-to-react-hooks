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
    <Container >
      <Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink href="/useState">useState</NavLink>
            <NavLink href="/useEffect">useEffect</NavLink>
            <NavLink href="/useContext">useContext</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    <Container size='xl'>
      <Switch>
        <Route
          exact
          path="/useState"
          component={FinishedStatefulButton}
        />
        <Route
          exact
          path="/useEffect"
          component={FinishedGhibliMovies}
        />
        <Route
          exact
          path="/useContext"
          component={FinishedTwoButtons}
        />
     </Switch>
     </Container>
    </BrowserRouter>
  );
}

export default App;
