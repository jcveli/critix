import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Fragment } from 'react';
import { Outlet } from 'react-router';
import Footer from '../footer/footer.component';
const NavBar = () => {

    return (
     
        <Fragment>
              <Navbar collapseOnSelect bg="dark" variant='dark' expand='lg'>            
                <Container>
                  <Navbar.Brand href="/">Critix</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/search">Search</Nav.Link>
                      <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
          <Outlet />
        </Fragment>
        
    )
}

export default NavBar; 