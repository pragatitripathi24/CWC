import React from 'react';
import child from '../images/child.jpg';

export default function Home() {
  return (
    <div>
      <div className="container text-center my-5">
        <h1>WELCOME TO CWC</h1>
        <h6>
        A child in need of care and protection is brought before a Child Welfare Committee (CWC) to dispose of cases for the care, protection, treatment, development and rehabilitation of children in need of care and protection, as well as to provide for their basic needs and protection.
        </h6>
        <img src={child} alt="not found" />
      </div>
      
    </div>
  );
}
