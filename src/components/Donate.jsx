import React from "react";
import './style/Donate.css'
import whatsapp from "./assets/whatsapp.png"
import pp from "./assets/pp.png"
import pesa from "./assets/pesa.png"

function Donate(){
  return(
    <div className="d-page">
      <div className="hero-image1">
        <div className="hero-title1">
          <h2>We Can Make A difference,<br/> Let's Start Now!</h2>
          <h2 style={{marginRight: "10vh"}}>Your donations will ensure<br/>our Angels get to <br/>learn comfortably</h2>
        </div>
      </div>
    
      <div className="donate">
        <h2>Donation Platform</h2>
        <div className="donate1">
          <div className="donate-text">
            <p className="don-image"><img src={pp} alt=".." /><span> emunjugah@yahoo.com</span></p>
            <p className="don-image"><img src={pesa} alt=".." /><span>0714811003</span> </p>
            <p><b>Name:</b> David Thairu</p>
            <p>For Enquires Reach us through</p>
           <p><img src={whatsapp} alt=".."/> <span>0714811003</span></p> 
          </div>

        </div>

      </div>
    </div>
  )
}

export default Donate;