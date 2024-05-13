import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
    let navigate = useNavigate()
    const [children, setChildren] = useState({
        location:"",
        name:"",
        age:"",
        gender: "",
        foundBy: "",
        hisPhoneNumber: "",
        status:""
    })

    const{location,name,age,gender,foundBy,hisPhoneNumber,status} = children

    const onInputChange=(e)=>{
        setChildren({...children,[e.target.name]: e.target.value})
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/children", children)
        navigate("/lostchild")
    }
  return (
    <div className="d-flex justify-content-center mt-5 ">
      <form onSubmit={(e)=>onSubmit(e)}
      style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input type="text" className="form-control" id="location" 
          name="location"
            value={location} 
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e)=>onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" className="form-control" id="age" name="age" value={age} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select className="form-select" id="gender" name="gender" value={gender} onChange={(e)=>onInputChange(e)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="foundBy" className="form-label">Found By</label>
          <input type="text" className="form-control" id="foundBy" name="foundBy" value={foundBy} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="hisPhoneNumber" className="form-label">His Phone Number</label>
          <input type="text" className="form-control" id="hisPhoneNumber" name="hisPhoneNumber" value={hisPhoneNumber} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <input type="text" className="form-control" id="status" name="status" value={status} onChange={(e)=>onInputChange(e)} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-outline-primary">Submit</button>
        <Link type="submit" className="btn btn-outline-danger" to="/lostchild">Cancel</Link>
      </form>
    </div>
  );
}
