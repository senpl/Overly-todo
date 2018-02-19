import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SearchableTasks from "./components/SearchableTasks";
import ExpandedApp from './components/ExpandedApp';
import ContextSelect from './components/ContextSelect';
import TodoApp from './components/TodoApp';
import configureStore from './store/configureStore';


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<SearchableTasks />, document.getElementById('root'));
ReactDOM.render(  <Provider store={configureStore()}>
    {/* <TodoApp /> */}
<ExpandedApp />
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
