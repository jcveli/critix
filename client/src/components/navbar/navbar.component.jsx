import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Fragment } from 'react';
import { Outlet } from 'react-router';

const NavBar = () => {

    return (
        <div className='navbar-container'>
        <Fragment>
                <Navbar bg="dark" variant='dark'>

                <Container>
                <Navbar.Brand href="/">Critix</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/search">Search</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
              </Container>
            
          </Navbar>
          <Outlet />
        </Fragment>
        </div>
    )
}

export default NavBar; 