import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    }
  }
  
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <>
        <button onClick={this.toggleModal}>Occur error</button>
        <ErrorBoundary onClose={this.toggleModal}>
          <Modal showModal={this.state.showModal}/>
        </ErrorBoundary>
      </>
    )
  }
}
