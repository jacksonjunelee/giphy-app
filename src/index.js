import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import configureStore from './store';
import {Provider} from 'react-redux';
import {loadGifs} from './actions/gifActions';

// // Import css
// import css from './styles/style.styl';

// Import Components
import App from './components/App';
import NotFound from './components/NotFound';

const store = configureStore();
store.dispatch(loadGifs());

const router = (
   <Provider store={store}>
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/view/:postId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  </Provider>
)

render(router, document.getElementById('root'));
