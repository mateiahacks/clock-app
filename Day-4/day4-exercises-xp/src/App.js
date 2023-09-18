import React, { Component } from "react";
import { ErrorBoundary } from "./ErrorHandling";
import FavoriteColor from "./Components/FavoriteColor";
import Header from "./Components/Header";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    
  }

  render = () => {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return (
      <div>
        
        <h1 onClick={this.handleClick}>{ this.state.counter }</h1>  
      </div>
    )
  }
}


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
    }
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <>
        <h4>Click on the numbers to increase the counters.</h4>
        <h4>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</h4>
        <hr></hr>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <hr></hr>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <hr></hr>
        <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
        <BuggyCounter />
        <hr></hr>
        <FavoriteColor />
        <hr></hr>
        {this.state.show && <Header />}
        <button onClick={this.toggleShow}>{this.state.show ? "Delete Header" : "Show Header"}</button>
      </>
    )
  }
}

export default App;