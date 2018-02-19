
import {connect} from 'react-redux';

import AddTodoEntry from '../components/AddTodoEntry';
import {addTodo} from '../actions/todo';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (text) => {
      dispatch(addTodo(text));
    }
  }
}

// state dispatch dispatch,  null
export default connect(null, mapDispatchToProps)(AddTodoEntry);
