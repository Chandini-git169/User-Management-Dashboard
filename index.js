import React, { useState } from 'react';

const UserForm = ({ addUser, updateUser, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
    setFormData({name: '', email: '', phone: '', website:'' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input className="name" type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br/>
      <label>
        email:
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br/>
      <label>
        Phone:
        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
      </label>
      <br/>
      <label>
        Website:
        <input type="text" name="website" value={formData.website} onChange={handleInputChange} />
      </label>
      <br/>
      <button className="addbutton" type="submit">Submit</button>
    </form>
  );
};

export default UserForm;