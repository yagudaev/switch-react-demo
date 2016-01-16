import React from 'react';

class ContactComponent extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <h1>Contact</h1>
        <p>We love hearing about your adventures! Please contact us below with any questions
        or stories of epic powder runs :).</p>
        <form className="form-rows">
          <input placeholder="name" />
          <input placeholder="email" type="email" />
          <textarea placeholder="message" />
        </form>
      </div>
    );
  }
}

export default ContactComponent;
