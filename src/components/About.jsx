import React from 'react';
import i18next from 'i18next';
let t = i18next.t.bind(i18next);

let compnayPhoto = require('../images/snowboard-man.jpg')

class AboutComponent extends React.Component {
  render() {
    return (
      <div className="about-page">
        <h1>{t('aboutPage.title')}</h1>
        <p>{t('aboutPage.content')}</p>
      <img src={compnayPhoto} style={{float: 'left', width: 375}}/>
      </div>
    );
  }
}

export default AboutComponent;
