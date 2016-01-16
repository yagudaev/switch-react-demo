require('normalize.css');
require('styles/App.scss');

import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import About from './About';
import Shop from './Shop';
import Contact from './Contact'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <ul className="inline-list menu">
            <li className="menu-item"><Link to="about">About</Link></li>
            <li className="menu-item"><Link to="shop">Shop</Link></li>
            <li className="menu-item"><Link to="contact">Contact</Link></li>
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
