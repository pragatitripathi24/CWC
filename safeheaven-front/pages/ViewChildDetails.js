import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewChildDetails() {
    const [child, setChild] = useState(null); // Updated for null initial state

    const { name } = useParams();

    useEffect(() => {
        const loadChildren = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/children/${name}`);
                const firstChild = response.data[0];
                if(firstChild) {
                  setChild(firstChild);
                } else {
                  console.error("No child found with this name:", name);
                }
            } catch (error) {
                console.error("Failed to fetch child details:", error);
            }
        };

        if (name) {
            loadChildren();
        }
    }, [name]);

    if (!child) {
        return <div>No child details available</div>;
    }

    // Added and updated CSS styles for better appearance
    const cardHeaderStyle = {
        background: 'linear-gradient(45deg, #007bff, #6610f2)',
        color: 'white'
    };

    const cardStyle = {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '5px',
    };

    const buttonStyle = {
        backgroundColor: "#007bff", /* Blue */
        border: "none",
        color: "white",
        padding: "10px 24px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        transitionDuration: "0.4s",
        cursor: "pointer",
        borderRadius: "5px",
    };

    const buttonHoverStyle = {
        backgroundColor: "white",
        color: "black",
        border: "2px solid #007bff",
    };

    return (
        <div className="container">
            <div className="col-md-8 offset-md-2 mt-5" style={cardStyle}>
                <h2 className="text-center my-4" style={{ color: '#007bff' }}>Child Details</h2>
                <div className="card">
                    <div className="card-header" style={cardHeaderStyle}>
                        Details of child: {child.name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Name:</b> {child.name}</li>
                        <li className="list-group-item"><b>Age:</b> {child.age}</li>
                        <li className="list-group-item"><b>Location:</b> {child.location}</li>
                        <li className="list-group-item"><b>Gender:</b> {child.gender}</li>
                        <li className="list-group-item"><b>Found by:</b> {child.foundBy}</li>
                        <li className="list-group-item"><b>Founder's-PhoneNumber:</b> {child.hisPhoneNumber}</li>
                        <li className="list-group-item"><b>Status:</b> {child.status}</li>
                    </ul>
                </div>
                <Link to="/lostchild" style={{ ...buttonStyle, ...buttonHoverStyle }} className="btn my-3">Back</Link>
            </div>
        </div>
    );
}
