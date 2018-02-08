import React, {Component} from 'react';
var DataTable = require('react-data-components').DataTable;

var columns = [
  {
    title: 'Name',
    prop: 'name'
  }, {
    title: 'Priority',
    prop: 'priority'
  }, {
    title: 'Due Date',
    prop: 'date'
  }, {
    title: 'Context',
    prop: 'context'
  }
];

var data = [
  {
    name: 'nazwaZadania',
    priority: '1',
    date: '12:06',
    context: 'atHome'
  }, {
    name: 'nazwaZadania2',
    priority: '2',
    date: '12:06',
    context: 'atHome'
  }
  // It also supports arrays
  // [ 'name value', 'city value', 'address value', 'phone value' ]
];

class TaskList extends Component {
  handleClick = () => {
    //import('./moduleA')
    console.log("test");
  };

  render() {
    return (<div className="TaskList">
      <DataTable keys="name" columns={columns} initialData={data} initialPageLength={5} initialSortBy={{
          prop: 'priority',
          order: 'ascending'
        }}/>
    </div>);
  }
}

export default TaskList;
