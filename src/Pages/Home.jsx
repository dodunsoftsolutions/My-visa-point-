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
import {Helmet} from "react-helmet";

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
      <Helmet>
                <meta charSet="utf-8" />
                <title>Top Immigration Consultants in Chandigarh | My Visa Point</title>
                <meta name="description" content="Looking for the best immigration consultants in Chandigarh? My Visa Point offers expert guidance and support for all your visa needs. Contact us today!" />
                <link rel="canonical" href="https://myvisapoint.com" />

                

            </Helmet>
            
   
    </div>
  );
};

export default Home;
