import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Fragment } from 'react';
import { Outlet } from 'react-router';
import Footer from '../footer/footer.component';

import './navbar.styles.scss'

const NavBar = () => {

    return (
     
        <Fragment>
              <Navbar collapseOnSelect expand='lg'>            
                <Container fluid className="navbar-container">
                  <Navbar.Brand className='nav-brand' href="/">Critix</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="nav-links-container">
                      <Nav.Link className="nav-links" href="/search">Search</Nav.Link>
                      <Nav.Link className="nav-links" href="/profile">Profile</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
          <Outlet />
        </Fragment>
        
    )
}

export default NavBar; 