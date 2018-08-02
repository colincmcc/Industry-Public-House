import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
;

/*
* PWA List at bottom of page
* GraphQL server is in the src/graphql folder.  Uses express-graphql and graphql-compose to construct server/schema
* Redux still will control state.  Using graphql to control data fetching. Need to query redux state with graphql as well.
*/
// TODO: PWA list
// * Move scroll logic higher up from Food & Drink Navs
// Stop background components from updating on menu modal loading
// Lazy Loading
// Code Splitting - probably via Webpack
// Configure Service Worker
//



ReactDOM.render(
  <BrowserRouter>
        <App />
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