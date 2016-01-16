import React from 'react';

let compnayPhoto = require('../images/snowboard-man.jpg')

class AboutComponent extends React.Component {
  render() {
    return (
      <div className="about-page">
        <h1>About</h1>
        <p>Established in 1983 SnowShop has been serving the unique needs of snowboarders.
        Ocassionaly making fun of the two plankers, yes, those pesky skiiers.</p>
      <img src={compnayPhoto} style={{float: 'left', width: 375}}/>
      </div>
    );
  }
}

export default AboutComponent;
