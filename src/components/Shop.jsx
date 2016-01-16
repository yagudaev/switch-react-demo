import React from 'react';
import i18next from 'i18next';
let t = i18next.t.bind(i18next);

let images = [];
for(var i = 1; i <= 9; i++) {
  images.push(require(`../images/snowboard-${i}.jpg`));
}

class ShopComponent extends React.Component {
  renderItems() {
    return images.map((image, i) => {
      return <img key={`product-${i}`} src={image} style={{width: 200, height: 200}}/>;
    });
  }
  render() {
    return (
      <div className="index">
        <h1>{t('shopPage.title')}</h1>
        {this.renderItems()}
      </div>
    );
  }
}

export default ShopComponent;
