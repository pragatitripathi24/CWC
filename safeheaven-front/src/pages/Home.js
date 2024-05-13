import React from 'react';
import child4 from '../images/child.jpg'
import child2 from '../images/child2.jpg'
import poori from '../images/poori.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="row" style={{ backgroundColor: '#261710' }}>
        <div className="col-md-5">
          <img src={poori} alt="Image" style={{ width: '100%', marginLeft: '4px', marginTop: '10px', height: '99%' }} />
        </div>
        <div className="col-md-6 mt-5">
          <div className="container mt-2" style={{ width: '100%', marginLeft: '50px', backgroundColor: '#261710', padding: '20px' }}>
            <h2 className="mb-4 text-center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: 'bold', color: '#b98d57' }}>
              Welcome to Child Welfare Committee (CWC)
            </h2>
            <p className="lead mb-4" style={{color: '#b98d57'}}>
          A child in need of care and protection is brought before a Child Welfare Committee (CWC) to dispose of cases for the care, protection, treatment, development, and rehabilitation of children in need of care and protection, as well as to provide for their basic needs and protection.
        
        The Committee shall consist of a Chairperson and four other members, of whom at least one shall be a woman and another, an expert on matters concerning children. The Committee shall function as a Bench of Magistrates.
        <br/>
        For the Children in need and care of protection, State Government may, by notification in Official Gazette, constitute for every district or group of districts, specified in the notification, one or more Child Welfare Committees for exercising the powers in relation to child in need of care and protection under this Act.
        </p>

        <button className="btn btn-primary me-3" 
        
     style={{
    backgroundColor: '#b98d57', 
    borderColor: '#b98d57',
    transition: 'background-color 0.3s, border-color 0.3s',
    '&:hover': {
      backgroundColor: '#996633',
      borderColor: '#996633'
    }
  }}
>
  <Link to="/schemes" style={{color:'#261710' }}>Read More</Link>
</button>
<button className="btn btn-primary me-3" 
        
     style={{
    backgroundColor: '#b98d57', 
    borderColor: '#b98d57',
    transition: 'background-color 0.3s, border-color 0.3s',
    '&:hover': {
      backgroundColor: '#996633',
      borderColor: '#996633'
    }
  }}
>
  <Link to="/schemes" style={{color:'#261710' }}>Contact Us</Link>
</button>
<div>
        

      
    

              
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
