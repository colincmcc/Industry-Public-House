import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { BrowserRouter } from 'react-router-dom'
import createStore from './store/createStore'


import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './common/assets/css/font-awesome.min.css'
;

// * PWA List at bottom of page

// Originally used Apollo to manage state, switched to redux
// TODO (eventually): figure out how to query redux with graphql


// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__)

// client Initialization
// ------------------------------------
const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",})
const routes = require('./routes/index').default(store)

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider store={store} client={client} >
      <div>
        <App store={store} routes={routes} />
      </div>
    </ApolloProvider>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();

/**
  * * PWA CHECKLIST --> https://developers.google.com/web/progressive-web-apps/checklist
  * *
  * * Site is served over HTTPS
  * * Pages are responsive on tablets & mobile devices
  * ! All app URLs load while offline
  * ! Metadata provided for Add to Home screen
  * * First load fast even on 3G (could improve)
  * * Site works cross-browser
  * * Page transitions don't feel like they block on the network
  * * Each page has a URL
  * ! Site's content is indexed by Google
  * * Schema.org metadata is provided where appropriate
  * * Social metadata is provided where appropriate
  * * Canonical URLs are provided when necessary
  * ? Pages use the History API
  * * Content doesn't jump as the page loads
  * * Pressing back from a detail page retains scroll position on the previous list page
  * * When tapped, inputs aren't obscured by the on screen keyboard
  * ? Content is easily shareable from standalone or full screen mode
  * * Site is responsive across phone, tablet and desktop screen sizes
  * ! Any app install prompts are not used excessively
  * ! The Add to Home Screen prompt is intercepted
  * ! Push Notifications, Offline Notifications, Caching
 **/