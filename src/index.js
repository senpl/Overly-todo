import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SearchableTasks from "./SearchableTasks";
import ExpandedApp from './ExpandedApp';
import ContextSelect from './ContextSelect';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<SearchableTasks />, document.getElementById('root'));
ReactDOM.render(<ExpandedApp />, document.getElementById('root'));

registerServiceWorker();
