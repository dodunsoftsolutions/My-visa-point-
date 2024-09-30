import React from 'react';
import HeroSection from '../Components/Hero';
import About from '../Components/about';
import Categories from '../Components/categories';
import SupportedCountries from '../Components/SupportedCountries';
import Progress from '../Components/Progress';
import ContactUs from '../Components/Contact';
import Testimonials from '../Components/Testimonials';
import StatsSection from '../Components/StatsSection';
import UniversitySection from '../Components/UniversitySection';
import ApprovedVisas from '../Components/ApprovedVisas';

const Home = () => {
  return (
    <div>
      {/* Assign unique ids for internal navigation */}
      <section id="Home">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Categories />
      </section>
      <section id="countries">
        <SupportedCountries />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="progress">
        <Progress />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <ApprovedVisas/>
      <StatsSection/>
      <UniversitySection/>
   
    </div>
  );
};

export default Home;
