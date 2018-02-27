import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import TaskTree from './TaskTree'
import Draggable from 'react-draggable';
import {Resizable, ResizableBox} from 'react-resizable';

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
      {/* <button onClick={this.handleOpenModal}>Trigger Modal</button> */}
      <Draggable handle=".handle" defaultPosition={{
          x: 0,
          y: 0
        }} position={null} grid={[25, 25]} onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>
        <div>
          <div className="handle">
            <ResizableBox width={200} height={200} minConstraints={[100, 100]} maxConstraints={[300, 300]}>
              <span>
                <button onClick={this.handleCloseModal}>Minimalize</button>
                <TaskTree/>
                <button onClick={this.handleCloseModal}>Minimalize</button>
              </span>
            </ResizableBox>
          </div>
        </div>
        {/*  */}
        {/* <button onClick={this.handleCloseModal}>Minimalize</button> */}
      </Draggable>
      {/* <ReactModal style={{
       overlay: {
         position: 'fixed',
         top: 100,
         left: 100,
         right: 0,
         bottom: 0,
         backgroundColor: 'rgba(125, 125, 125, 0.5)'
       },
       content: {
         position: 'absolute',
         top: '4px',
         left: '4px',
         right: '4px',
         bottom: '4px',
         border: '1px solid #ccc',
         background: 'rgba(125, 125, 125, 0.5)',
         overflow: 'auto',
         WebkitOverflowScrolling: 'touch',
         borderRadius: '4px',
         outline: 'none',
         padding: '20px'
       }
     }} isOpen={this.state.showModal} contentLabel="Minimal Modal Example test">
  </ReactModal> */
      }

    </div>);
  }
}

const props = {};

export default ExampleApp;
