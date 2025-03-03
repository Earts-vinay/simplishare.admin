import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from './pages/Home';
import Brand from './pages/Brand';
import Offers from './pages/Offers';
import GenPost from './pages/GenPost';
import Analysts from './pages/Analysts';
import Audience from './pages/Audience';
import AddOffers from './components/Offers_Screens/AddOffers';
import Onboard from './pages/Onboard';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Drafts from './components/GenAi_Screens/Drafts';
import UpgradePlan from './components/Profile_Screens/UpgradePlan';
import Confirmation from './components/Profile_Screens/Confirmation';
import Calendar from './components/GenAi_Screens/Calender';

const AppContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/onboard'; // Condition to hide navbar on /onboard route

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/onboard" element={<Onboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/audience" element={<Audience />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/addoffers" element={<AddOffers />} />
        <Route path="/genpost" element={<GenPost />} />
        <Route path="/genpost/drafts" element={<Drafts />} />
        <Route path="/genpost/calender" element={<Calendar />} />
        <Route path="/analysts" element={<Analysts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/upgrade" element={<UpgradePlan />} />
        <Route path="/profile/upgrade/confirm" element={<Confirmation />} />

      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
