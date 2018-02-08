import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExpandedApp from './ExpandedApp';
import Greeting from './Logged';
import { Component}  from 'react';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<ExpandedApp />, document.getElementById('root'));
ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={true} />,
  document.getElementById('root')
);
registerServiceWorker();
