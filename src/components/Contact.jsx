import React from 'react';
import i18next from 'i18next';
let t = i18next.t.bind(i18next);

class ContactComponent extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <h1>Contact</h1>
        <p>We love hearing about your adventures! Please contact us below with any questions
        or stories of epic powder runs :).</p>
        <form className="form-rows">
          <input placeholder={t('contactPage.name')} />
          <input placeholder={t('contactPage.email')} type="email" />
          <textarea placeholder={t('contactPage.message')} />
        </form>
      </div>
    );
  }
}

export default ContactComponent;
