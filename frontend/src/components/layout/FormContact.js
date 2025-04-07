import React from 'react';
import '../../styles/style.css'

const FormContact = () => {
  return (
    <div className="form-contact">
      <form className="form-content-contact">
        <input type="text" placeholder="Name" className="info" required />
        <input type="tel" placeholder="Phone: 12-3456-7890" pattern='[0-9]{2}-[0-9]{4}-[0-9]{4}' className="info" required />
        <input type="email" placeholder="Email address" className="info" required />
        <button type="submit" className="btn">Contact Us</button>
      </form>
    </div>
  );
};

export default FormContact;