import React from "react";
import "./style/Footer.css"
import { Link, useNavigate } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function Footer({ token }) {

  const navigate = useNavigate();


  const handleAdminLinkClick = () => {
    const isAdmin = true; // Replace this with your admin role check
    if (isAdmin) {
      if (!token) {
        navigate('/login'); 
      } else {
        navigate('/admin-dashboard');
      }
    }
  };


  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='socials d-flex justify-content-center p-4 border-bottom'>
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='footer-content'>
        <MDBContainer className='bg-light text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Angels Forgotten
              </h6>
              <p>
              We appreciate your support and our promise is that your donations will go directly to these loved children
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>About Us</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Our Sponsors</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Gallery</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Talk to us</a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p><MDBIcon icon="home" className="me-2" /> Elburgon, Nakuru</p>
              <p><MDBIcon icon="envelope" className="me-3" /> elburgonangels@gmail.com</p>
              <p><MDBIcon icon="message" className="me-3" /> +254714811003</p>
              <p><Link to="tel:+254714811003" style={{ textDecoration: "none", color: "grey" }}><MDBIcon icon="phone" className="me-3" /> +254714811003</Link></p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='copyright p-3' style={{ backgroundColor:'black', color: "white" }}>
        {/* © 2023 <span><Link className="text-decoration-none" onClick={handleAdminLinkClick}>Copyright</Link></span> */}
        © 2023 <span type="button" className="text-decoration-none" onClick={handleAdminLinkClick}>Copyright</span>  | <span style={{ fontSize: 8+"px", position: "relative", right: 0 }}>Designed by JAY-M</span>
      </div>
    </MDBFooter>
  )
}



