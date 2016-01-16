require('normalize.css');
require('styles/App.scss');

import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import i18next from 'i18next';
let t = i18next.t.bind(i18next);

import About from './About';
import Shop from './Shop';
import Contact from './Contact'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <ul className="inline-list menu">
            <li className="menu-item"><Link to="about">{t('menu.about')}</Link></li>
            <li className="menu-item"><Link to="shop">{t('menu.shop')}</Link></li>
            <li className="menu-item"><Link to="contact">{t('menu.contact')}</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Shop} />
          <Route path="about" component={About} />
          <Route path="shop" component={Shop} />
          <Route path="contact" component={Contact} />
        </Route>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
