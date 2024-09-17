import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import StudyVisa from './Pages/StudyVisa';
import TopUpVisa from './Pages/TopUpVisa';
import TouristVisa from './Pages/TouristVisa';
import Navbar from './Components/Nav';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import SpouseVisa from './Pages/SpouseVisa';
import ScrollToTop from './Components/ScrollToTop';
import Sidebar from './Components/Sidebar';
import FormData from './Pages/FormData';
import Australia from './Pages/Australia';
import USA from './Pages/USA';
import Canada from './Pages/Canada';
import UnitedKingdom from './Pages/UnitedKingdom';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import NewZealand from './Pages/NewZealand';
import Schengen from './Pages/Schengen';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/study-visa" element={<StudyVisa />} />
        <Route path="/top-up-visa" element={<TopUpVisa />} />
        <Route path="/tourist-visa" element={<TouristVisa />} />
        <Route path="/spouse-visa" element={<SpouseVisa />} />
        <Route path="/formData" element={<FormData/>}/>
        <Route path="/australia" element={<Australia/>}/>
        <Route path="/usa" element={<USA/>}/>
        <Route path="/canada" element={<Canada/>}/>
        <Route path="/Uk" element={<UnitedKingdom/>}/>
        <Route path="/NewZealand" element={<NewZealand/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/schengen" element={<Schengen/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
 