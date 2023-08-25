import React, { useState, useEffect } from 'react';
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarItem, MDBCollapse, MDBNavbarNav, MDBIcon } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.svg'
import './style/Navbar.css'


export default function Navbar2({ token }) {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);
  const [scrolling, setScrolling] = useState(false); 

 
  function handleLogout(){
    localStorage.removeItem('user');
    localStorage.removeItem('TOKEN');
    window.location.href= "/"
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <MDBNavbar className='' expand='lg'>
        <MDBContainer className={`navbar-container ${scrolling ? 'navbar-shrink' : ''}`} fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggler'
            aria-controls='navbarToggler'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoToggler(!showNavNoToggler)}
          >
            <MDBIcon className='bars' icon='bars' fas />
          </MDBNavbarToggler>

          <MDBNavbarBrand className={scrolling ? 'navbar-shrink' : ''}><img src={logo} alt="logo"/></MDBNavbarBrand>
          
          <MDBCollapse navbar show={showNavNoToggler} >
            <MDBNavbarNav className='navbar-nav nav-background mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <NavLink active aria-current='page' to='/'>Home</NavLink>
              </MDBNavbarItem >
              <MDBNavbarItem>
                <NavLink to="/gallery">Gallery</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/about-us">About Us</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/donate">Donate</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='logout'>
              {token ? 
                <button onClick={handleLogout}>Logout</button> : null
              }
              </MDBNavbarItem>
              
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}