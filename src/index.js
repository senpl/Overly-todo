import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskList from './TaskList';
import registerServiceWorker from './registerServiceWorker';
import SearchableTasks from "./SearchableTasks";
import ExpandedApp from './ExpandedApp';

// ReactDOM.render(<SearchableTasks />, document.getElementById('root'));
// ReactDOM.render(<TaskList />, document.getElementById('root'));
ReactDOM.render(<ExpandedApp />, document.getElementById('root'));

registerServiceWorker();
