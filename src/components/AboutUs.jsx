import React from "react";
import "./style/About.css"
import mission from "./assets/mission.png"



function AboutUs(){
  return(
    <div className="aboutus">
      <div className="about-header">
        <div className="about-text">
          <h4 style={{ color: "#94DA89" }}>About Us</h4>
          <p>The Founder of Angels Forgotten Esther & David are residents of Kenya, who after having seen orphaned children going without education or food decided to assist by starting a school in Elburgon Kenya with a goal of of feeding and educating the children.We are a non-profit organization depending on donation from well-wishes</p>
        </div>
      </div>

      <div className="angels">
        <h2>About <span>Angels Forgotten</span></h2>
        <div className="mission-v">
          <div className="mission">
            <div>
              <h4>Our Mission</h4>
              <div className="vis-mis">
                <div className="arrow-line"></div>
                <p>To educate, feed, and clothe the needy children </p>
              </div>
            </div>
            <div>
              <h4>Our Vision</h4>
              <div  className="vis-mis">
                <div className="arrow-line"></div>
                <p>To reach out to all needy children of the world </p>
              </div>
            </div>
          </div>
          <div>
            <img src={mission} alt="..." />
          </div>
        </div>
      </div>

      <div className="history">
        <h2>History of <span>Angels Forgotten</span></h2>
        <div>
          <p>Started in 2009 with 1 manager, 1 teacher, 10 children, and 1 cook in a one room mud house, the School with the help of our dedicated donors has grown. There are over 200 children from grade one to eight, 23 teachers,  4 cooks, 6 guards and 4 gardeners. Furthermore over 16 children have been admitted in High schools and looking forward to joining university. </p>
        </div>
      </div>

      <div className="donor">
        <h2>Appreciation to<span> Our Donors</span></h2>
        <p>We appreciate your support and our promise is that your donations will go directly to these loved children</p>
      </div>

    </div>
  )
}

export default AboutUs;