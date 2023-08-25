import React, { useEffect, useState } from "react";
import './style/ImageForm.css'
import './style/Landing.css'
import "./style/Gallery.css"
import "./style/AdminDashboard.css"
import axiosClient from "../axios";
import about from './assets/about.png'
import ambulance from './assets/ambulance.png'
import book from './assets/book.png'
import court from './assets/court.png'
import { Link, Navigate, Outlet } from "react-router-dom";
import { MDBFile, MDBInput } from "mdb-react-ui-kit";



function AdminDashboard(){
    const [images, setImages] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const [editingImagePreview, setEditingImagePreview] = useState(null);
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [editingTitle, setEditingTitle] = useState('');
    const [editingFile, setEditingFile] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);
    const [imageId, setImageId] = useState(null);
    const [ourGallery, setOurGallery] = useState([]);
    const [beforeAfter, setBeforeAfter] = useState([]);
    const [showFullDescription, setShowFullDescription] = useState(null);




  useEffect(() => {
    getBeforeAfter();
    getOurGallery();
    getImages();
  }, []);


  const getImages = async () => {
    try {
        axiosClient.get('/images')
        .then((res) => {
          setImages(res.data)
        })
        .catch((error) => {
          console.log(error)
        })

    } catch (error) {
        console.log("Error fetching Images:", error)
    } 
  }

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

  const updateImage = (image) => {
    // setIsEditing(true);
    setImageId(image.id);
    setEditingTitle(image.image_name);
    setEditingFile(null); 
  };  

  const resetForm = () => {
    setTitle('');
    setFile(null);
    setImageId(null);
  };


  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setEditingFile(title);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setEditingImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const handleSubmit = async (e) => {
      e.preventDefault()

      const formData = new FormData();
      formData.append('image_file', file);
      formData.append('image_name', title)

      const config = {
          headers: {
              'content-type': 'multipart/form-data',
          },
      };

      try {
        await axiosClient.post('/images', formData, config)
        alert(`Successfully uploaded ${title}`)
        

        resetForm();
        setImagePreview("");
        getImages();

      } catch (error) {
          console.log("Error uploading Image:", error)
          alert(error.response.data.message)
      }
      
  };

  const handleUpdate = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('image_file', editingFile || file); 
    formData.append('image_name', editingTitle || title);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
  
    try {
      await axiosClient.post(`/images/${imageId}`, formData, config);
      alert(`Successfully updated ${editingTitle || title}`);
  
      getImages();
      resetForm();
  
    } catch (error) {
      console.log("Error updating Image:", error);
      alert(error.response.data.message);
    }

  };


//   deleting Image
  const deleteImage = async (id) => {
    await axiosClient.delete(`/images/${id}`, {
        headers: {"Content-Type":"application/json"}
      })
      setImages(images.filter(image => image.id !== id))
  };


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


      {/* upload image form */}
      <div className='form-upload modal fade' id="uploadImage" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalLabel">Upload Image</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Image Description:</label>
                            <MDBInput 
                                type='text' 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <MDBFile 
                                label="Select an Image"
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                          {imagePreview && (
                            <img src={imagePreview} alt={title} style={{ maxWidth: "200px", marginTop: "10px" }}/>                           
                          )}
                        </div>
                        

                        <button data-bs-dismiss="modal" type='submit'>Upload Image</button>
                    </form>
                    
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
      </div>

        {/* update image form */}
        <div className='form-upload modal fade' id="updateImage" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalLabel">Update Image</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label>Image Description:</label>
                            <MDBInput 
                                type='text' 
                                value={editingTitle}
                                onChange={(e) => setEditingTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <MDBFile 
                                label="Select an Image"
                                onChange={handleChange}
                                value={editingFile}
                            />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                          {editingImagePreview && (
                            <img src={editingImagePreview} alt={editingTitle || title} style={{ maxWidth: "200px", marginTop: "10px" }}/>                           
                          )}
                        </div>
                        

                        <button data-bs-dismiss="modal" type='submit'>Update Image</button>
                    </form>
                    
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
      </div>

      <div>
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
          <div>
            {ourGallery.map(image => (
              <div key={image.id}>
                {/* <img src={`http://127.0.0.1:8000/${image.image_file}`} alt="..."/> */}
                <img src={`https://api.elburgonangelstotos.com/${image.image_file}`} alt="..."/>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gallery-page" >
        <h2>Gallery Collection</h2>
        <div className="gallery-collection">
          {images.map((image) => (
              <div 
                className="gallery1" 
                key={image.id}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {hoveredId === image.id && (
                    <div className="delete-update-icon">
                        <i
                            data-bs-toggle="modal" data-bs-target="#updateImage"
                            style={{color: 'blue', marginRight: 2+"vw"}}
                            onClick={() => updateImage(image)} 
                            className="fas fa-edit"
                            type="button"
                        ></i>
                        <i 
                            style={{color: 'darkOrange'}} 
                            onClick={() => deleteImage(image.id)} 
                            className="fas fa-trash"
                            type="button"
                        ></i>
                    </div>
                )}
        
                <img className="rounded" src={`https://api.elburgonangelstotos.com/${image.image_file}`} alt={image.image_name} />
                {/* <img className="rounded" src={`http://127.0.01:8000/${image.image_file}`} alt={image.image_name} /> */}
                <div className="image-description" >
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
          <button className="mask btn btn-primary gallery1 add-image bg-image hover-overlay" data-bs-toggle="modal" data-bs-target="#uploadImage" title="Add New Image">
            <span style={{ fontSize: 50+"px" }}>+</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;