import React from 'react';

import { render } from 'react-dom';

// // Import css
// import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/child-components/Single';
import Grid from './components/child-components/Grid';
import Main from './components/Main';
import NotFound from './components/NotFound';

// import react router deps
import { BrowserRouter, Match, Miss } from 'react-router';
// import { Provider } from 'react-redux';
// import store, { history } from './store';

const router = (
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={Main} />
      <Match pattern="/view/:postId" component={Main} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>
)

render(router, document.getElementById('root'));
