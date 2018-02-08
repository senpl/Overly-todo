import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExpandedApp from './ExpandedApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ExpandedApp />, document.getElementById('root'));
registerServiceWorker();
