import React, { Component } from 'react'

export default class FavoriteColor extends Component {

  constructor(props) {
    super(props);

    this.state = {
        color: 'red',
    }
  }

  changeColor = () => {
    if (this.state.color === 'red') {
        this.setState({color: 'yellow'});
    } else {
        this.setState({color: 'red'});
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    setTimeout(() => this.changeColor(), 1000);
  }

  componentDidUpdate() {
    console.log("after update");
  }

  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is <i>{ this.state.color }</i></h1>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    )
  }
}
