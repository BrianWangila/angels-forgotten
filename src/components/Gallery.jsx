import React, { useEffect, useState } from "react";
import "./style/Gallery.css"
import axiosClient from "../axios";


function Gallery(){
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(null);


  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {

    try {
        // setLoading(true)
        axiosClient.get('/images')
        .then((res) => {
          // setLoading(false)
          setImages(res.data)
            console.log(res.data)
        })
        .catch((error) => {
          // setLoading(false)
          console.log(error)
        })

    } catch (error) {
        console.log("Error fetching Images:", error)
    }
  }

  const toggleDescription = (id) => {
    setShowFullDescription(showFullDescription === id ? null : id);
  };


  return(
    <div>
      <div className="hero-image">
        <div className="hero-title2">
            <div className="h-line" style={{ marginBottom: 2+"vh" }}></div>
            <h2 style={{ marginBottom: 2+"vh" }}>BY FAITH AND HOPE ACADEMY</h2>
            <h4>Where Every Child Matters</h4>
            <div className="h-line" style={{ width: 15+"vw", marginTop: 2+"vh"  }}></div>
          </div>
      </div>

      <div className="gallery-page" >
        <h2>Gallery Collection</h2>

        <div className="gallery-collection">
          {images.map((image) => (
              <div className="gallery1" key={image.id}>
                <img className="rounded" src={`https://api.elburgonangelstotos.com/${image.image_file}`} alt={image.image_name} />
                {/* <img className="rounded" src={`http://127.0.0.1:8000/${image.image_file}`} alt={image.image_name}/> */}
                <div className="image-description"  >
                  <p 
                    className="description" 
                    style={{ marginTop: 1+"vh", fontWeight:500 }}
                    onClick={() => toggleDescription(image.id)}
                  >
                    {showFullDescription === image.id ? image.image_name : (image.image_name.slice(0, 12))}
                  </p>
                  <p 
                    className="full-description" 
                    style={{ marginTop: 1+"vh", fontWeight:500 }}
                  >
                    {image.image_name}
                  </p>
                  
                </div>
              </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Gallery;