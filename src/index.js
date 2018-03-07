import React from 'react';
import { render } from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from 'components/App';


const root = document.getElementById('root');

render(<App />, root);
registerServiceWorker();
