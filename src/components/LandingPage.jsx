
import React, { useState, useEffect } from "react";
import './style/Landing.css'
import about from './assets/about.png'
import ambulance from './assets/ambulance.png'
import book from './assets/book.png'
import court from './assets/court.png'
import { Link } from "react-router-dom";
import axiosClient from "../axios";



function LandingPage(){
    const [beforeAfter, setBeforeAfter] = useState([]);
    const [ourGallery, setOurGallery] = useState([]);


  useEffect(() => {
    getBeforeAfter();
    getOurGallery();
  }, []);


  const getOurGallery = async () => {
    try {
        axiosClient.get('/display')
        .then((res) => {
          setOurGallery(res.data)
            console.log(res.data)
        })
        .catch((error) => {
          console.log(error)
        })

    } catch (error) {
        console.log("Error fetching Images:", error)
    } 
  }

  const getBeforeAfter = async () => {
    try {
        axiosClient.get('/before-after')
        .then((res) => {
          setBeforeAfter(res.data)
            console.log(res.data)
        })
        .catch((error) => {
          console.log(error)
        })

    } catch (error) {
        console.log("Error fetching Images:", error)
    } 
  }

  return(
    <>
        <div className="hero-image" style={{ marginTop: 70+"px" }}>
          <div className="hero-title2">
            <div className="h-line" style={{ marginBottom: 2+"vh" }}></div>
            <h2 style={{ marginBottom: 2+"vh" }}>BY FAITH AND HOPE ACADEMY</h2>
            <h4>Where Every Child Matters</h4>
            <div className="h-line" style={{ width: 15+"vw", marginTop: 2+"vh"  }}></div>
          </div>
        </div>

      <div className="about-us">
        <div>
          <img src={about} alt="about-us" />
        </div>
        <div className="about">
          <h2>About Us</h2>
        </div>
        <div className="content">
          <h2>About <span>Us</span></h2>
          <p>We are a Non-profit Organization. <br/>
            We envision a world where no child is deprived of the basic necessities required for a stable happy, productive and rewarding life...</p>
            <Link to="/about-us">Read More</Link>
        </div>
      </div>

      <div className="what-we-do">
        <h2><span>What</span> We DO</h2>
        <p>We are committed to provide for the needs of all children</p>
        <div className="cards card-flex">
          <div className="card text-center mb-3" style={{width: 18+"rem"}}>
            <div className="card-body dets">
              <img src={ambulance} alt="..."  className="card-title" />
              <p className="card-text">Medical services</p>
            </div>
          </div>
          <div className="card text-center mb-3 two" style={{width: 18+"rem"}}>
            <div className="card-body dets">
              <img src={book} alt="..." className="card-title" />
              <p className="card-text">Education</p>
            </div>
          </div>
          <div className="card text-center mb-3" style={{width: 18+"rem"}}>
            <div className="card-body dets">
              <img src={court} alt="..." className="card-title" />
              <p className="card-text">Child rights</p>
            </div>
          </div>
        </div>
      </div>

      <div className="our-story">
          <h2>Our <span color="red">Story</span></h2>
          <p>From this to that, it is our goal to transform this part of Kenya. <br/>
            Just like a bird, twig by twig the nest is completed</p>
          <div className="image-container">
              {beforeAfter.map(image => (
                <div className="label" key={image.id}>
                  {/* <img style={{ width: 33.6+"vw" }} src={`http://127.0.0.1:8000/${image.image_file}`} alt="..."/> */}
                  <img style={{ width: 33.6+"vw" }} src={`https://api.elburgonangelstotos.com/${image.image_file}`} alt="..."/>
                  <p>{image.label}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="gallery">
          <h2><span>Our</span> Gallery</h2>
          <div >
            {ourGallery.map(image => (
              <div key={image.id}>
                {/* <img src={`http://127.0.0.1:8000/${image.image_file}`} alt="..."/> */}
                <img src={`https://api.elburgonangelstotos.com/${image.image_file}`} alt="..."/>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default LandingPage;