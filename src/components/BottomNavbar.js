import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BottomNavbar.css';

function BottomNavbar() {
  const [click, setClick] = useState(false);
  const [button, setbttn] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setbttn(false);
    } else {
      setbttn(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='bottom-navbar'>
        <div className="bottom-nav">
          <ul className="bottom-class">
                <li className='bottom-nav-item'>
                  <Link to='/' className='bottom-nav-links' onClick={closeMobileMenu}>
                    Find Jobs
                  </Link>
                </li>
                <li className='bottom-nav-item'>
                  <Link to='/' className='bottom-nav-links' onClick={closeMobileMenu}>
                    Find Freelancers
                  </Link>
                </li>
                <li className='bottom-nav-item'>
                  <Link to='/' className='bottom-nav-links' onClick={closeMobileMenu}>
                    Get Ideas
                  </Link>
                </li>
                <li className='bottom-nav-item'>
                  <Link to='/' className='bottom-nav-links' onClick={closeMobileMenu}>
                    Resources
                  </Link>
                </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default BottomNavbar;