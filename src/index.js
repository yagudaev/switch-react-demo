import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import i18next from 'i18next';
import xhr from 'i18next-xhr-backend';

let language = (window.location.search.match(/lang=([^&]*)/) || [null, 'en'])[1];
i18next
  .use(xhr)
  .init({
    debug: true,
    lng: language,
    fallbackLng: 'en',
    backend: {
      loadPath: `/locales/{{lng}}.json?cacheBuster=${Math.random()}`
    }
  }, () => {
    ReactDOM.render(<App />, document.getElementById('app'));
  }
);
