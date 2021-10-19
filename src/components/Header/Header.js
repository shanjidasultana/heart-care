import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo1-removebg-preview (1).png'
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className=" justify-content-center align-items-center d-flex">
                    <img src={logo} width="80" alt="" />
                    <div className="ms-2">
                       <h1> Heart <span className="text-danger">care</span></h1>
                        <small className="text-muted mt-0">we care about your heart</small>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-5">
                    <NavLink className="page"to="/home">Home</NavLink>
                    <NavLink className="page"to="/about">About</NavLink>
                    <NavLink className="page"to="/services">Services</NavLink>
                    <NavLink className="page"to="/contact">Contact</NavLink>
                    <NavLink className="page"to="/department">Department</NavLink>
                    <NavLink className="page"to="/register">Register</NavLink>
                    {user?.email && <p className="text-danger me-4">{user?.displayName} </p>}
                    {
                    user.email ?
                        <button onClick={logOut} className="btn">log out</button>
                        :
                        <NavLink to="/login"><button className="btn mt-2 me-2">Login</button></NavLink>}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;