import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#b98d57', color: '#261710' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{fontWeight: 'bold'}}>CWC</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ marginRight: '15px', fontWeight: 'bold' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/schemes" style={{ marginRight: '15px', fontWeight: 'bold' }}>Schemes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/ngos" style={{ marginRight: '15px', fontWeight: 'bold' }}>NGO's</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact" style={{ marginRight: '15px', fontWeight: 'bold' }}>Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about" style={{ marginRight: '15px', fontWeight: 'bold' }}>About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/lostchild" style={{ marginRight: '15px', fontWeight: 'bold' }}>Lost Children</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/lostchild" style={{ marginRight: '15px', fontWeight: 'bold' }}>RTI</Link>
              </li> */}
             
            
         
            </ul>
            {/* <form className="d-flex" role="search">
             
              <Link to="/" className='xy lead' style={{color:'#261710', }} >CWC</Link>
            </form> */}

          </div>

        </div>
      </nav>
      
    </div>
  );
}
