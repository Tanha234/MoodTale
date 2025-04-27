import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

function Root() {
  return (
    <div>
      <Navbar/>

      <Outlet /> {/* This will show Home, BlogList, Mood pages dynamically */}
      <Footer/>
    </div>
  );
}

export default Root;
