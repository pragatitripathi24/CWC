import React, {  useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function LostChildren() {
  const [children, setChildren] = useState([]);
  const [name, setName] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
    loadChildren(value); // Call loadChildren with the updated value
  };

  const loadChildren = async (searchTerm) => {
    try {
      const result = await axios.get(`http://localhost:8080/children/${searchTerm}`);
      setChildren(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="bg-dark">
      <div className="d-flex justify-content-center my-2">
        <form className="d-flex" role="search" >
          <input
            className="form-control me-2 my-2 col-md-6"
            type="search"
            value={name}
            onChange={handleChange}
            placeholder="Search child by name"
            aria-label="Search"
            style={{
              backgroundColor: '#f0f0f0',
              padding: '15px',
              borderRadius: '10px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              border: 'none',
              outline: 'none',
              flex: '1',
              marginRight: '5px',
            }}
          />
          <Link className="btn btn-primary mx-2" to="/adduser" style={{backgroundColor :'rgb(185, 141, 87)', color: '#261710'}}>
            Add Children Detail
          </Link>
        </form>
      </div>

      <table className="table table-hover my-5">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Location</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Found by</th>
            <th scope="col">Founder's PhoneNumber</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {children.map((child, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{child.location}</td>
              <td>{child.name}</td>
              <td>{child.age}</td>
              <td>{child.gender}</td>
              <td>{child.foundBy}</td>
              <td>{child.hisPhoneNumber}</td>
              <td>{child.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
