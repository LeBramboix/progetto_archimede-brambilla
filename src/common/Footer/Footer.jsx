import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='wrapper'>
        <div className="footer-column">
          <p>Copyright © 2024 Los Pollos Bramboix. All rights reserved</p>
        </div>
        <div className="footer-column"></div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Clicca qui per tornare su</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;