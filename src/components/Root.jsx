import React from 'react';
import { Outlet } from 'react-router-dom';
import Blog from './Blog/Blog';
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

function Root() {
  return (
    <div>
      <Navbar/>

      <Outlet >
      <Blogs/>
      <Blog/>
      
      </Outlet>
      <Footer/>
    </div>
  );
}

export default Root;
