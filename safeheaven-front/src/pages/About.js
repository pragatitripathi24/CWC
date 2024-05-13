import React from 'react';
import poori from '../images/children.png';

const ChildWelfareCommittee = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Child Welfare Committee And Its Procedure</h2>
              <p className="card-text">
                The Child Welfare Committee is an independent body declared as an appropriate authority to deal with children in need of care and protection, as per Section 27 of Chapter V of the Juvenile Justice (Child Care and Protection) Act, 2015.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h3>Composition of the Committee</h3>
              <p>
                The committee consists of a Chairman and four other eligible members of the National Government, including at least one woman and one specialist in child affairs. The secretary and other staff of the District Child Protection Unit support the Committee for effective implementation.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h3>Appointment and Qualifications</h3>
              <p>
                Members must have at least seven years of active involvement in health, education, and social matters concerning children, or be freelance professionals with expertise in child psychology, law, or human development. Appointed members serve for a term of three years.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h3>Procedure of Inquiry</h3>
              <ol>
                <li>Upon receipt of a report under section 32, the Committee conducts an investigation in the prescribed manner and may order the child to be sent to a children’s home for immediate protection.</li>
                <li>Investigations must be completed within four months, with the possibility of extension under certain circumstances.</li>
                <li>The State Government must review a majority of the Committee’s cases every six months.</li>
                <li>If the child has no family or material support, the Committee may allow the child to remain in a children’s home until appropriate rehabilitation is arranged or until the age of eighteen.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h3>Powers of the Committee</h3>
              <ul>
                <li>The Committee has full authority to dismiss cases for the care, protection, and management of children.</li>
                <li>It may also dismiss cases for the development, rehabilitation, and protection of children in need, and provide necessary care and protection.</li>
                <li>When constituted for a specific area, the Committee has the capacity to handle all activities under the child-related laws.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddMember = () => {
  return (
    <>
      <div className="row" style={{ backgroundColor: '#261710' }}>
        <div className="col-md-5">
          <img src={poori} alt="Image" style={{ width: '100%', marginLeft: '4px', marginTop: '10px', height: '99%' }} />
        </div>
        <div className="col-md-6">
          <div className="container mt-2" style={{ width: '100%', marginLeft: '50px', backgroundColor: '#261710', padding: '20px' }}>
            <h2 className="mb-4 text-center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: 'bold', color: '#b98d57' }}>
              all About Child Welfare Committe (CWC)
            </h2>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#b98d57', height: '100%', borderRadius: '10px', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <div className="card-body" style={{ backgroundColor: '#b98d57', borderRadius: '10px' }}>
                    <h3 className="card-title">Child Welfare Committee And Its Procedure</h3>
                    <p className="card-text">
                      The Child Welfare Committee is an independent body declared as an appropriate authority to deal with children in need of care and protection, as per Section 27 of Chapter V of the Juvenile Justice (Child Care and Protection) Act, 2015.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#b98d57', height: '100%' }}>
                  <div className="card-body" style={{ backgroundColor: '#b98d57', borderRadius: '10px' }}>
                    <h3 className="card-title">Composition of the Committee</h3>
                    <p>
                      The committee consists of a Chairman and four other eligible members of the National Government, including at least one woman and one specialist in child affairs. The secretary and other staff of the District Child Protection Unit support the Committee for effective implementation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#b98d57', height: '100%' }}>
                  <div className="card-body" style={{ backgroundColor: '#b98d57', borderRadius: '10px' }}>
                    <h3 className="card-title">Appointment and Qualifications</h3>
                    <p>
                      Members must have at least seven years of active involvement in health, education, and social matters concerning children, or be freelance professionals with expertise in child psychology, law, or human development. Appointed members serve for a term of three years.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#b98d57', height: '100%' }}>
                  <div className="card-body" style={{ backgroundColor: '#b98d57', borderRadius: '10px' }}>
                    <h3 className="card-title">Procedure of Inquiry</h3>
                    <ol>
                      <li>Upon receipt of a report under section 32, the Committee conducts an investigation in the prescribed manner and may order the child to be sent to a children’s home for immediate protection.</li>
                      <li>Investigations must be completed within four months, with the possibility of extension under certain circumstances.</li>
                      <li>The State Government must review a majority of the Committee’s cases every six months.</li>
                      <li>If the child has no family or material support, the Committee may allow the child to remain in a children’s home until appropriate rehabilitation is arranged or until the age of eighteen.</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: '#b98d57', height: '100%' }}>
                  <div className="card-body" style={{ backgroundColor: '#b98d57', borderRadius: '10px' }}>
                    <h3 className="card-title">Powers of the Committee</h3>
                    <ul>
                      <li>The Committee has full authority to dismiss cases for the care, protection, and management of children.</li>
                      <li>It may also dismiss cases for the development, rehabilitation, and protection of children in need, and provide necessary care and protection.</li>
                      <li>When constituted for a specific area, the Committee has the capacity to handle all activities under the child-related laws.</li>
                    </ul>
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

export default AddMember;
