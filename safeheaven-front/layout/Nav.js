import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
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
                <Link className="nav-link active" aria-current="page" to="/programme" style={{ marginRight: '15px', fontWeight: 'bold' }}>Programmes</Link>
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
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/rules" style={{ marginRight: '15px', fontWeight: 'bold' }}>Rules</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/lostchild" style={{ marginRight: '15px', fontWeight: 'bold' }}>Media</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/lostchild" style={{ marginRight: '15px', fontWeight: 'bold' }}>RTI</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/faq" style={{ marginRight: '15px', fontWeight: 'bold' }}>FAQ's</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/lostchild" style={{ marginRight: '15px', fontWeight: 'bold' }}>Archives</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/lostchild" style={{ marginRight: '15px', fontWeight: 'bold' }}>Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/lostchild" style={{ marginRight: '15px', fontWeight: 'bold' }}>Orders</Link>
              </li>

              
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul> */}
              {/* </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" style={{ fontWeight: 'bold' }}>Disabled</a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
             
              <button className="btn btn-outline-success" type="submit">Login/Register</button>
            </form>

          </div>

        </div>
      </nav>
      
    </div>
  );
}
