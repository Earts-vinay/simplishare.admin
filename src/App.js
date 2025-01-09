import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from './pages/Home';
import Brand from './pages/Brand';
import Offers from './pages/Offers';
import GenPost from './pages/GenPost';
import Analysts from './pages/Analysts';
import Signup from './components/Login_Screens/signup';
import Audience from './pages/Audience';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
    <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/audience" element={<Audience />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/genpost" element={<GenPost />} />
      <Route path="/analysts" element={<Analysts />} />
    </Routes>
  </Router>
);

export default App;
