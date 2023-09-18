import React, { Component } from 'react'

export default class Modal extends Component {

  render() {
    if (this.props.showModal) {
        throw new Error('something went wrong!');
    }
    return (
      <div>
        {this.props.showModal &&
         (<div className='modal-background'>
            <div className='modal-body'>
                <button onClick={this.props.onClose}>close</button>
            </div>
        </div>) }
      </div>
    )
  }
}
