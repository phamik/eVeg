import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import './scss/style.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('root'));
registerServiceWorker();
