import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

function Root() {
  return (
    <div>
      <Navbar/>

      <Outlet /> {/* This will show Home, BlogList, Mood pages dynamically */}
    </div>
  );
}

export default Root;
