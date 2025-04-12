
import React, { useState, useEffect } from 'react';

export const Register = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and handle form data
    console.log(formData);
  };
  


  return (
    <div className="Register">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form=register">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Repeat similar blocks for lastName, email, password, confirmPassword */}
        <div className="form-register">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-register">
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
            />{' '}
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
  
}

export default Register;