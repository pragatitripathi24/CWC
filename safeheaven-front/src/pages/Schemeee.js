import React from 'react';
import second from '../images/second.png'
import poor from '../images/child4.jpg'

const Schemeee = () => {
  return (
    <>
      <div className="row" style={{ backgroundColor: '#261710' }}>
        <div className="col-md-6 order-md-2 mt-2 ml-2">
          <img src={poor} alt="Image" style={{ width: '100%', marginLeft: '4px', marginTop: '10px', height: '99%', marginRight: '0'}} />
        </div>
        <div className="col-md-6">
          <div className="container mt-2" style={{ width: '100%', backgroundColor: '#261710', padding: '20px' }}>
            <h2 className="mb-4 text-center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: 'bold', color: '#cf9146' }}>
              Child Welfare Schemes
            </h2>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#cf9146', height: '100%' , borderRadius: '10px', transition: 'transform 0.3s, box-shadow 0.3s'  }}>
                  <div className="card-body" style={{ backgroundColor: '#cf9146', borderRadius: '10px' }}>
                    <h3 className="card-title">ICDS – Integrated Child Development Services</h3>
                    <p className="card-text">This program came into effect in 1975. It aims to enhance the nutrition, health, and learning opportunities of infants and young children (0-6 years) along with their mothers.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#cf9146', height: '100%' }}>
                  <div className="card-body" style={{ backgroundColor: '#cf9146' , borderRadius: '10px'}}>
                    <h3 className="card-title">Scheme for the children of working mothers</h3>
                    <p className="card-text">This scheme came into effect in 2006. Its main aim is the overall development of children, childhood protection, awareness generation, and complete immunization. It spreads awareness among parents on health, malnutrition, and education.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#cf9146', height: '100%' }}>
                  <div className="card-body" style={{ backgroundColor: '#cf9146', borderRadius: '10px' }}>
                    <h3 className="card-title">Child Health and Reproductive Programme</h3>
                    <p className="card-text">This scheme came into effect in 1951. Its main aim is to provide quality sustainable Primary Health Care services to women in the reproductive age group, with a special focus on immunization and family planning.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#cf9146', height: '100%' }}>
                  <div className="card-body" style={{ backgroundColor: '#cf9146', borderRadius: '10px' }}>
                    <h3 className="card-title">Pulse Polio Immunization Programme</h3>
                    <p className="card-text">This scheme came into effect in 1995. Its main aim is to eradicate poliomyelitis (polio) in India by vaccinating all children under five years of age against poliovirus.</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#cf9146', height: '100%' }}>
                  <div className="card-body" style={{ backgroundColor: '#cf9146', borderRadius: '10px' }}>
                    <h3 className="card-title">Sarva Shiksha Abhiyan</h3>
                    <p className="card-text"> This scheme came into effect in 2001. It aims to ensure all children are in school, with a focus on elementary education and bridging social category gaps.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#cf9146', height: '100%' }}>
                  <div className="card-body" style={{ backgroundColor: '#cf9146', borderRadius: '10px' }}>
                    <h3 className="card-title">Kasturba Gandhi Balika Vidyalaya</h3>
                    <p className="card-text">This scheme came into effect in 2001. It aims to ensure all children are in school, with a focus on elementary education and bridging social category gaps.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#cf9146', height: '100%' }}>
                  <div className="card-body" style={{ backgroundColor: '#cf9146', borderRadius: '10px' }}>
                    <h3 className="card-title">Mid-day Meal Scheme</h3>
                    <p className="card-text">This scheme came into effect in 1995. Its main idea is to improve the nutritional status of children in classes 1 to 8 in various educational institutions, encouraging attendance among disadvantaged children.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#cf9146', height: '100%' }}>
                  <div className="card-body" style={{ backgroundColor: '#cf9146', borderRadius: '10px' }}>
                    <h3 className="card-title">Poshan Abhiyan</h3>
                    <p className="card-text">  The Abhiyaan is being implemented in all districts of Haryana. Nuh and Panipat districts were selected for Phase-I. For Phase-II, 10 districts, namely Kaithal, Karnal, Kurukshetra, Bhiwani, Yamuna Nagar, Gurugram, Palwal, Rohtak, Sirsa and Sonipat were selected. Remaining districts are covered in the Phase III.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schemeee;
