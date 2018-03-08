import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'index.css';
import registerServiceWorker from 'registerServiceWorker';
import App from 'components/App';
import configureStore from 'core/configureStore';


const root = document.getElementById('root');
const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root />, root);
registerServiceWorker();
