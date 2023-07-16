import React, { useState } from "react";

const Volunteers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    areaOfInterest: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      areaOfInterest: "",
    });
  };

  return (
    <div className="container mt-5 volunti">
      <h2 className="mb-4">Volunteer Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control m-auto volunti-data"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control volunti-data"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            className="form-control volunti-data"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="areaOfInterest">Area of Interest:</label>
          <textarea
            className="form-control volunti-data"
            id="areaOfInterest"
            name="areaOfInterest"
            value={formData.areaOfInterest}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-flex flex-box justify-content-center">
          <button type="submit" className="btn btn-primary mt-5">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Volunteers;
