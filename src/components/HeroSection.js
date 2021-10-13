import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h2>Hire the best <br />freelancers for any job, <br />online.</h2>
      <p>Millions of people use freelancer.com to turn their ideas <br /> into reality.</p>
      <div className='hero-btns'>
        <Button
        className='btns'
        buttonStyle='btn--special'
        buttonsize='btn--xxl'
        >
          Hire a Freelancer
        </Button>
        <Button
        className='btns'
        buttonStyle='btn--primary--special'
        buttonsize='btn--xxl'
        >
          Earn Money Freelancing
        </Button>
      </div>
    </div>
  )
}

export default HeroSection