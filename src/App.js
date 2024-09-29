import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import StudyVisa from './Pages/StudyVisa';
import VisaCounselling from './Pages/VisaCounselling';
import TouristVisa from './Pages/TouristVisa';
import Navbar from './Components/Nav';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import SuperVisa from './Pages/SuperVisa';
import ScrollToTop from './Components/ScrollToTop';
import Sidebar from './Components/Sidebar';
import FormData from './Pages/FormData';
import IeltsPte from './Pages/IeltsPte';
import InterviewPreparation from './Pages/Interview';
import Australia from './Pages/Australia';
import USA from './Pages/USA';
import Canada from './Pages/Canada';
import UnitedKingdom from './Pages/UnitedKingdom';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import NewZealand from './Pages/NewZealand';
import Schengen from './Pages/Schengen';
import MessageButton from './Components/MessageButton';
import ContactUs from './Components/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MessageButton/>
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/study-visa" element={<StudyVisa />} />
        <Route path="/visa-Counselling" element={<VisaCounselling />} />
        <Route path="/tourist-visa" element={<TouristVisa />} />
        <Route path="/super-visa" element={<SuperVisa />} />
        <Route path="/IeltsPte" element={<IeltsPte />} />
        <Route path="/Interview" element={<InterviewPreparation />} />
        <Route path="/formData" element={<FormData/>}/>
        <Route path="/australia" element={<Australia/>}/>
        <Route path="/usa" element={<USA/>}/>
        <Route path="/canada" element={<Canada/>}/>
        <Route path="/Uk" element={<UnitedKingdom/>}/>
        <Route path="/NewZealand" element={<NewZealand/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/schengen" element={<Schengen/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        {/* <Route path="/AboutUS" element={<AboutUs/>}/> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
 