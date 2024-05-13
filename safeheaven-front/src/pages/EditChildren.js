import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditChildren() {
    let navigate = useNavigate();

    const {id} = useParams();
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [foundBy, setFoundBy] = useState("");
    const [hisPhoneNumber, setHisPhoneNumber] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/children/${id}`);
                const { location, name, age, gender, foundBy, hisPhoneNumber, status } = result.data;
                setLocation(location);
                setName(name);
                setAge(age);
                setGender(gender);
                setFoundBy(foundBy);
                setHisPhoneNumber(hisPhoneNumber);
                setStatus(status);
            } catch (error) {
                console.error("Failed to load child data:", error);
            }
        };
        loadData(); // Load child data when component mounts
    }, [id]); // Include id in the dependency array

    const onInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "location":
                setLocation(value);
                break;
            case "name":
                setName(value);
                break;
            case "age":
                setAge(value);
                break;
            case "gender":
                setGender(value);
                break;
            case "foundBy":
                setFoundBy(value);
                break;
            case "hisPhoneNumber":
                setHisPhoneNumber(value);
                break;
            case "status":
                setStatus(value);
                break;
            default:
                break;
        }
    };
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const childData = { location, name, age, gender, foundBy, hisPhoneNumber, status };
        try {
            await axios.put(`http://localhost:8080/children/${id}`, childData);
            navigate("/lostchild");
        } catch (error) {
            console.error("Failed to update child:", error);
        }
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <form onSubmit={onSubmit} style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2>Edit Children</h2>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="location" name="location" value={location} onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" name="age" value={age} onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select className="form-select" id="gender" name="gender" value={gender} onChange={onInputChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="foundBy" className="form-label">Found By</label>
                    <input type="text" className="form-control" id="foundBy" name="foundBy" value={foundBy} onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="hisPhoneNumber" className="form-label">His Phone Number</label>
                    <input type="text" className="form-control" id="hisPhoneNumber" name="hisPhoneNumber" value={hisPhoneNumber} onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <input type="text" className="form-control" id="status" name="status" value={status} onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-outline-primary me-2">Submit</button>
                <Link className="btn btn-outline-danger" to="/lostchild">Cancel</Link>

            </form>
        </div>
    );
}
