import React from 'react';
import './Activities.css';
import { Button } from './Button';

function Activities() {
  return (
    <div>
      <div className="activities">
        <h1 className='activitiesheader'>Get work done in over 1800 different categories</h1>
        <ul className='activitieslist'>
          <li className='activitiesli'>
            <p className='activitiesp'>Website Design</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Translation</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Python</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Excel</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Photoshop</p>
          </li>
        </ul>
        <ul className='activitieslist'>
          <li className='activitiesli'>
            <p className='activitiesp'>Mobile Apps</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Research</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Wordpress</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Ghostwriting</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Technical Writing</p>
          </li>
        </ul>
        <ul className='activitieslist'>
          <li className='activitiesli'>
            <p className='activitiesp'>Android Apps</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Research Writing</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Websearch</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Copywriting</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Blogging</p>
          </li>
        </ul>
        <ul className='activitieslist'>
          <li className='activitiesli'>
            <p className='activitiesp'>iPhone Apps</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Article Writing</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Finance</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Accounting</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Internet Marketing</p>
          </li>
        </ul>
        <ul className='activitieslist'>
          <li className='activitiesli'>
            <p className='activitiesp'>Software Architecture</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Web scraping</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Legal</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>MySQL</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>eCommerce</p>
          </li>
        </ul>
        <ul className='activitieslist'>
          <li className='activitiesli'>
            <p className='activitiesp'>Graphic Design</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>HTML</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Linux</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Banner Design</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Data Entry</p>
          </li>
        </ul>
        <ul className='activitieslist'>
          <li className='activitiesli'>
            <p className='activitiesp'>Logo Design</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>CSS</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Manufacturing</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Illustration</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Link building</p>
          </li>
        </ul>
        <ul className='activitieslist'>
          <li className='activitiesli'>
            <p className='activitiesp'>Public Relations</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>HTML 5</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Amazon Web Services</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Software Development</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>C++ Programming</p>
          </li>
        </ul>
        <ul className='activitieslist'>
          <li className='activitiesli'>
            <p className='activitiesp'>Logistics</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Javascript</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Content Writing</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>PHP</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>C# Programming</p>
          </li>
        </ul>
        <ul className='activitieslist'>
          <li className='activitiesli'>
            <p className='activitiesp'>Proofreading</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Data Processing</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>Marketing</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>3d modelling</p>
          </li>
          <li className='activitiesli'>
            <p className='activitiesp'>See All</p>
          </li>
        </ul>
      </div>
      <ul className='activities-ul'>
        <li>
          <div className='activities-container'>
            <h5>Freelancer API.</h5>
            <h2>50 million professionals <br /> on demand</h2>
            <p>Why hire people when you can simply integrate our <br /> talented cloud workforce instead?</p>
            <div className='activity-btns'>
              <Button
              className='btns'
              buttonStyle='btn--special'
              buttonsize='btn--xxl'
              >
                View Documentation
              </Button>
            </div>
          </div>
        </li>
        <li>
          <div className='activities-container2'>
              <h5>Freelancer Enterprise.</h5> 
              <h2>Company budget? Get <br /> more done for less</h2>
              <p>Use our workforce of 50 million to help your <br /> business achieve more.</p>
              <div className='activities-btns'>
                <Button
                className='btns'
                buttonStyle='btn--special'
                buttonsize='btn--xxl'
                >
                  Contact Us
                </Button>
              </div>
          </div>
        </li>
      </ul>
      
    </div>
  )
}

export default Activities