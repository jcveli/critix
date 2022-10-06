import {Button, Form, Container, Nav, Navbar} from 'react-bootstrap';
import { Fragment } from 'react';
import { Outlet } from 'react-router';
import Footer from '../footer/footer.component';

import critixIcon from "../../assets/critix_icon.png";

import './navbar.styles.scss'
import { NavLink } from 'react-router-dom';


const NavBar = () => {

    return (
     
        <Fragment>
            	<Navbar collapseOnSelect className="navbar-container" color =''expand='lg'>            
                	<Container fluid>
						<Navbar.Brand className='nav-brand'>
							<img 
								src={critixIcon}
								width="40"
								height="40"
								className="d-inline-block align-top"
								alt="critix brand"
							/>
							<NavLink className='brand-link' to='/'>Critix</NavLink>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse  id="responsive-navbar-nav">
						
						<Nav className="nav-links-container">
							<NavLink className="nav-links" to="/search">Search</NavLink>
							<NavLink className="nav-links" to="/profile">Profile</NavLink>
						</Nav>
					
						</Navbar.Collapse>
                	</Container>
            	</Navbar>
          <Outlet />
        </Fragment>
        
    )
}

export default NavBar; 