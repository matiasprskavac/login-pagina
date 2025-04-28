import React, { useState } from 'react';
import '../../styles/style.css'

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Correo enviado exitosamente');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar el formulario');
    }
  };

  return (
    <div className="form-contact">
      <form className="form-content-contact" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className="info" required name="name" value={formData.name} onChange={handleChange} />
        <input type="tel" placeholder="Phone: 12-3456-7890" pattern='[0-9]{2}-[0-9]{4}-[0-9]{4}' className="info" name="phone" required value={formData.phone} onChange={handleChange} />
        <input type="email" placeholder="Email address" className="info" required name="email" value={formData.email} onChange={handleChange} />
        <button type="submit" className="btn">Contact Us</button>
      </form>
    </div>
  );
};

export default FormContact;