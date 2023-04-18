import React, { useState } from 'react';

export function CreateDegree(){
  const [formData, setFormData] = useState({
    full_name: '',
    shortcode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      };
      const response = await fetch('http://127.0.0.1:8000/api/degree/', options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter details for a new degree:</h3>
      <label>
        <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder='Degree Full Name' required/>
      <br></br>
      <br></br>
      </label>
      <br></br>
      <label>
        <input type="text" name="shortcode" value={formData.shortcode} onChange={handleChange} placeholder='Degree Shortcode' required/>
      <br></br>
      </label>
      <br></br>
      <br></br>
      <button type="submit">Create Degree</button>
    </form>
  );
};

