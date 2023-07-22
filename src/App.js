import React, { useState } from 'react';
import axios from "axios"

const CompanyForm = () => {
  const [formData, setFormData] = useState({
  });
console.log(formData,"data")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit= async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://20.244.56.144/train/register', { formData});
      console.log(response,"response")
      alert("register successfull");
    } catch (error) {
      alert("register fail")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="clientID">Client ID:</label>
        <input
          type="text"
          id="clientID"
          name="clientID"
          value={formData.clientID}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="ownerName">Owner Name:</label>
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="rollNo">Roll No:</label>
        <input
          type="text"
          id="rollNo"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="ownerEmail">Owner Email:</label>
        <input
          type="email"
          id="ownerEmail"
          name="ownerEmail"
          value={formData.ownerEmail}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="clientSecret">Client Secret:</label>
        <input
          type="text"
          id="clientSecret"
          name="clientSecret"
          value={formData.clientSecret}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="accessCode">accessCode:</label>
        <input
          type="text"
          id="accessCode"
          name="accessCode"
          value={formData.accessCode}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CompanyForm;
