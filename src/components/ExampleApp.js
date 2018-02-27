import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import TaskTree from './TaskTree'

class ExampleApp extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({showModal: true});
  }

  handleCloseModal() {
    this.setState({showModal: false});
  }

  render() {
    return (<div>
      <button onClick={this.handleOpenModal}>Trigger Modal</button>
      <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example test">
        <button onClick={this.handleCloseModal}>Minimalize</button>
        <TaskTree/>
        <button onClick={this.handleCloseModal}>Minimalize</button>
      </ReactModal>
    </div>);
  }
}

const props = {};

export default ExampleApp;
