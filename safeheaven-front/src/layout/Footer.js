import React from 'react';
import logo from '../images/foot.png';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'black', color: '#b98d57' }} className="footer mt-auto py-3">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center">
            {/* <img src={logo} alt="Your Logo" style={{ maxWidth: '100px', marginLeft: '100%', marginBottom: '20px' }} /> */}
          </div>
          <div className="col-md-5 ">
            <div>
              <strong>Contact Us:</strong><br />
              Phone: +91 9456773798<br />
              Email: ChildWelfare@gmail.com
            </div>
            <div>
              <strong>Follow Us:</strong><br />
              <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" color= "#b98d57" style={{ color: '#b98d57' }}>Facebook  ,</a>
              <a href="https://www.instagram.com/childwelfarecommittee/" target="_blank" rel="noopener noreferrer"style={{ color: '#b98d57' }}>Instagram</a>
            </div>
            <p>@Child Welfare Committe (CWC)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
