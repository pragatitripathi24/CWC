import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Contact() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        loadMembers(); // Call the function with parentheses
    }, []);

    const loadMembers = async () => {
        const result = await axios.get("http://localhost:8080/members");
        setMembers(result.data);
    }

    return (
        <div>
         <div className="d-flex justify-content-center my-2">
    <form className="d-flex" role="search" style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <input className="form-control me-2 my-2" type="search" placeholder="Search for location" aria-label="Search" style={{ background: 'none', border: 'none', outline: 'none', flex: '1', marginRight: '5px' }} />
        <button className="btn btn-outline-success" type="submit" style={{ background: '#5cb85c', border: 'none', borderRadius: '5px', padding: '8px 15px' }}>Search</button>
    </form>
</div>

            <table className="table table-hover my-5">
            
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Location</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">PhoneNumber</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{member.location}</td>
                            <td>{member.firstName}</td>
                            <td>{member.lastName}</td>
                            <td>{member.phoneNumber}</td>
                            <td>{member.email}</td>
                            <td>
                              <button className="btn btn-primary mx-2">View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
