import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './config/registerServiceWorker';
import SearchableTasks from "./components/SearchableTasks";
import ExpandedApp from './components/ExpandedApp';
import App from './components/ContextSelect';
import TaskTree from './components/TaskTree';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<SearchableTasks />, document.getElementById('root'));
ReactDOM.render(<ExpandedApp />, document.getElementById('root'));
// ReactDOM.render(<TaskTree />, document.getElementById('root'));

registerServiceWorker();
