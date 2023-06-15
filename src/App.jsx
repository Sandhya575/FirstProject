// import React from 'react'
//import ResponsiveDrawer from './Admin/Layout'
//import ResponsiveAppBar from './User/UserLayout';

import About from './User/AboutUs/About';
import Blog from './User/Blog/Blog';
import SingleBlog from './User/Blog/SingleBlog';
import Home from './User/Home/Home';
import UserLayout from './User/UserLayout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {



  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/single-blog/:id" element={<SingleBlog />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="/home" element={<AdminHome />} />
        </Routes>

      </Router>

    </>
  );
}

export default App;
