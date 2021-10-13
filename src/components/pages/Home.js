import React from 'react';
import '../../App.css';
import Activities from '../Activities';
import BottomNavbar from '../BottomNavbar'
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Info from '../Info';

function Home() {
  return (
    <>
      <BottomNavbar />
      <HeroSection />
      <Info />
      <Cards />
      <Activities />
      <Footer />
    </>
  )
}

export default Home
