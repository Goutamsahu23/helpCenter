import React from 'react';
 // Import the CSS file here

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <h3>Abstract</h3>
          <p>Branches</p>
        </div>
        <div>
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Release Notes</p>
          <p>Status</p>
        </div>
        <div>
          <h3>Community</h3>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Dribbble</p>
          <p>Podcast</p>
        </div>
        <div>
          <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Legal</p>

          <h3>Contact Us</h3>
          <p>info@abstract.com</p>
        </div>
      </div>
      <div className="footer-center">
        <p>© Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
