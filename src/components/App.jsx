
import './App.css';
import LandingPage from './LandingPage';
import Gallery from './Gallery'
import AboutUs from './AboutUs';
import Donate from './Donate';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate} from "react-router-dom";
import Navbar2 from './Navbar2';
import Footer from './Footer';
import AdminDashboard from './AdminDashboard';
import Login from '../views/Login';
import { useState, useEffect } from 'react';
import AdminRouteGuard from './AdminRouteGuard';



function App() {

  const [token, setToken] = useState("");
 
  useEffect((() => {
    setToken(localStorage.getItem("TOKEN"))
  }), [token])



  const onLogin = () => {
    window.location.href= "/admin-dashboard"

  };

  return (
      <>
      <Router>
          <Navbar2 token={token}/>
          <Routes>
              <Route exact path='/' element={<LandingPage />}></Route>
              <Route exact path='/gallery' element={<Gallery />}></Route>
              <Route exact path='/about-us' element={<AboutUs />}></Route>
              <Route exact path='/donate' element={<Donate />}></Route>
              <Route exact path="/login" element={<Login onLogin={onLogin}/>}></Route>
              <Route exact path="/admin-dashboard" element={ <AdminRouteGuard element = {<AdminDashboard token={token}/>}/> }></Route>

          </Routes>
          <Footer token={token}/>
      </Router>
    </>

    
  );
}

export default App;
