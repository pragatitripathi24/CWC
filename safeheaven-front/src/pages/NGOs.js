import React from 'react';

export default function NGOs() {
  // Dummy data for NGOs
  const ngos = [
    {
      name: 'Society for Development Activities',
      Types: 'Non-Governmental Organization',
      Founded: '2012',
      Founder: 'Akshai Abraham',
      mission: 'We work on Civic Responsibility, Child Sexual Abuse, Personal Hygiene and Self Presentation, Menstrual Hygiene Management, Safe Hand Washing, Peer Pressure, Tobacco and Substance Abuse, Dengue Awareness',
      website: 'https://www.projectkhel.org',
      Address: '5/414, Viraj Khand – 5, Viraj Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
      Contact: 'contact@projectkhel.org'
    },
    {
      name: 'Vidya and Child',
      Types: 'Non-Governmental Organization',
      Founded: '1998',
      Founder: 'Supriya Akhaury',
      mission: 'We work on Education.',
      website: 'https://www.vidyaandchild.org',
      Address: 'Ambedkar Vihar, Sector 37, Noida',
      Contact: 'info@vidyaandchild.org'
    },
    {
      name: 'Jyoti Bal Vikas Sanstha',
      Types: 'Non-Governmental Organization',
      Founded: '1990',
      Founder: 'Dr S.N. Dixit',
      mission: 'We work on Education, Women Empowerment and Skill Training.',
      website: 'https://www.jyotiforchildren.org',
      Address: '117/M/112A, Kakadeo, Kanpur-208019 (India)',
      Contact: 'bhitoor@jyotiforchildren.org'
    },
    {
      name: 'Kutumb Samajothhan Ewam Punerwas Sanstha',
      Types: 'Non-Governmental Organization',
      Founded: '2002',
      Founder: 'Dr Ashish and Ms Puja',
      mission: 'We work on street children, women empowerment and community development.',
      website: 'https://www.kutumbfamily.org',
      Address: 'Kutumb Shelter House, House No. S 17/324, Nadesar, Varanasi, Uttar Pradesh, India, 221001',
      Contact: 'varanasikutumb@gmail.com'
    },
    {
      name: 'Hindustan Latex Family Planning Promotion Trust',
      Types: 'Non-Governmental Organization',
      Founded: '1992',
      Founder: 'H.L.L. Lifecare Ltd',
      mission: 'We work on Education, Healthcare, Women Empowerment and Skill Training.',
      website: 'https://www.hlfppt.org',
      Address: 'B-14A, IInd Floor, Sector-62, Gautam Budh Nagar, Noida, Uttar Pradesh – 201307, India.',
      Contact: 'info@hlfppt.org'
    },
    {
      name: 'Jan Vikas Samiti',
      Types: 'Non-Governmental Organization',
      Founded: '1997',
      Founder: 'Fr. Dilraj IMS and Fr. Abhishiktanand',
      mission: 'We work on Education, Healthcare, Women Empowerment and Skill Training.',
      website: 'https://www.janvikassamiti.org',
      Address: 'Mrdaha, Christ Nagar Post, Varanasi, Uttar Pradesh – 2211003',
      Contact: 'mail@janvikassamiti.org'
    },
    {
      name: 'Food for Life Vrindavan',
      Types: 'Non-Governmental Organization',
      Founded: '1991',
      Founder: 'Pietro Paolinelli',
      mission: 'We work on Education, Healthcare, Livelihood, Women Empowerment and Skill Training.',
      website: 'https://www.fflv.org',
      Address: 'Sandipani Muni School (FFLV), Burja Road, Chaitanya Vihar, Vrindavan, 281121, Uttar Pradesh, India',
      Contact: 'info@fflv.org'
    },
    {
      name: 'Drishti Foundation',
      Types: 'Non-Governmental Organization',
      Founded: '2003',
      Founder: 'Dinesh Kr. Gautam',
      mission: 'We work on Education, Healthcare, Livelihood, Women Empowerment and Disaster response.',
      website: 'https://www.drishteefoundation.org',
      Address: 'B.S.I. Rise Tower, H-15, First Floor- 107/108 Sector 63, Noida- 201307',
      Contact: 'info@drishtee.com'
    }
  ];
  

  // CSS styles
  const styles = `
  .ngo-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; /* Align from left side */
    width: 100%;
  }
  
  .ngo-card {
    width: calc(30% - 20px); /* Adjust width as needed */
    margin-top: 40px;
    margin-right: 20px; /* Add margin between cards */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #b98d57; /* Beautiful color */
  
  }
  
  .ngo-card h3 {
    margin-bottom: 10px;
    font-weight: bold; /* Make headings bold */
  }
  
  .ngo-card p {
    font-size: 14px;
    color: #151010;
  }
  
  `;

  return (
    <div className="container mt-5" style={{ backgroundColor: '#261710' , padding: '20px' }}>
      <h2 className="mb-4 text-center " style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: 'bold', color: 'rgb(185 141 87)' }}>
       NGO's details from different locations.
      </h2>
      <style>{styles}</style>
      <div className="ngo-list-container" style={{color: '#151010'}}>
        {ngos.map((ngo, index) => (
          <div key={index} className="ngo-card">
            
            <h3>{ngo.name}</h3>
            <p>{ngo.mission}</p>
            <p>Type :{ngo.Types}</p>
            <p>Found In :{ngo.Founded}</p>
            <p>Founder :{ngo.Founder}</p>
            <p>Address :{ngo.Address}</p>
            <p>Contact :{ngo.Contact}</p>
            <div>
              <a href={ngo.website} target="_blank" title={`${ngo.name} charity website`} style={{color : '#39302b'}}>website : {ngo.website}</a>&nbsp;
              
            </div>
            <div>{ngo.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
