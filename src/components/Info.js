import React from 'react';
import './Info.css';

function Info() {
  return (
    <div>
      <div className="users">
        <p>As used by</p>
      </div>
      <div className="horizontalline">
        <hr />
      </div>
      <div className="subinfo">
        <h1 className='infoheader'>Need something done?</h1>
        <ul className='infolist'>
          <li className='infoli'>
            <h2 className='infoh2'>Post a job</h2>
            <p className='infop'>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.</p>
          </li>
          <li className='infoli'>
            <h2 className='infoh2' >Choose freelancers</h2>
            <p className='infop'>No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!</p>
          </li>
          <li className='infoli'>
            <h2 className='infoh2'>Pay safely</h2>
            <p className='infop'>Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.</p>
          </li>
          <li className='infoli'>
            <h2 className='infoh2'>We’re here to help</h2>
            <p className='infop'>Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you</p>
          </li>
        </ul>
      </div>
      <div className="horizontalline">
        <hr />
      </div>
      <div className="subinfo">
        <h1 className='infoheader'>What's great about it?</h1>
        <ul className='infolist'>
          <li className='infoli'>
            <h2 className='infoh2'>Browse portfolios</h2>
            <p className='infop'>Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.</p>
          </li>
          <li className='infoli'>
            <h2 className='infoh2' >Fast bids</h2>
            <p className='infop'>Receive obligation free quotes from our talented freelancers fast. 80% of projects get bid on within 60 seconds.</p>
          </li>
          <li className='infoli'>
            <h2 className='infoh2'>Quality work</h2>
            <p className='infop'>Freelancer.com has by far the largest pool of quality freelancers globally- over 50 million to choose from.</p>
          </li>
          <li className='infoli'>
            <h2 className='infoh2'>Track progress</h2>
            <p className='infop'>Keep up-to-date and on-the-go with our time tracker, and mobile app. Always know what freelancers are up to</p>
          </li>
        </ul>
      </div>
      <div className="horizontalline">
        <hr />
      </div>
      
    </div>
  )
}

export default Info;