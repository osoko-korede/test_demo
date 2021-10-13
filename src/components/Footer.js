import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <img src="/images/logo.png" className='footimg' />
            <Link to='/'>US(International) / English</Link>
            <Link to='/'>Help & Support</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Freelancer</h2>
            <Link to='/'>Categories</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'>Contents</Link>
            <Link to='/'>Freelancers</Link>
            <Link to='/'>Enterprise</Link>
            <Link to='/'>Preferred Freelancer Program</Link>
            <Link to='/'>Project Management</Link>
            <Link to='/'>Local Jobs</Link>
            <Link to='/'>Photo Anywhere</Link>
            <Link to='/'>Showcase</Link>
            <Link to='/'>API for Developers</Link>
            <Link to='/'>Get Verified</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>About</h2>
            <Link to='/'>About us</Link>
            <Link to='/'>How it Works</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Security</Link>
            <Link to='/'>Investor</Link>
            <Link to='/'>Sitemap</Link>
            <Link to='/'>Quotes</Link>
            <Link to='/'>News</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Terms</h2>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms and Conditions</Link>
            <Link to='/'>Copyright Policy</Link>
            <Link to='/'>Code of Conduct</Link>
            <Link to='/'>Fees and Charges</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Partners</h2>
            <Link to='/'>Escrow.com</Link>
            <Link to='/'>Loadshift</Link>
            <Link to='/'>Freightlancer</Link>
            <Link to='/'>Warrior Forum</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Apps</h2>
            <Link to='/'>Available on App store</Link>
            <Link to='/'>Get it on Google play</Link>
            <Link to='/'>
              <div class='social-icons'>
                <Link
                  class='social-icon-link facebook'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <i class='fab fa-facebook-f' />
                </Link>
                <Link
                  class='social-icon-link instagram'
                  to='/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <i class='fab fa-instagram' />
                </Link>
                <Link
                  class='social-icon-link youtube'
                  to='/'
                  target='_blank'
                  aria-label='Youtube'
                >
                  <i class='fab fa-youtube' />
                </Link>
                <Link
                  class='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <i class='fab fa-twitter' />
                </Link>
                <Link
                  class='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <i class='fab fa-linkedin' />
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="horizontalline">
        <hr />
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <h5>56,785,234</h5>
            <p>Registered Users</p>
          </div>
          <div class='footer-logo'>
            <h5>23,785,234</h5>
            <p>Total Jobs Posted</p>
          </div>
          <div class='footer-logo'>
            <p>Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 142 189 759) <br /> Copyright © 2021 Freelancer Technology Pty Limited (ACN 142 189 759)</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
