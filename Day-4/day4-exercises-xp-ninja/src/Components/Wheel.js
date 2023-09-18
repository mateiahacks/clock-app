import React, { Component, createRef } from 'react';
import './Wheel.css';

const array = (n) => {
    return Array.from({length: n}, (_, index) => index + 1);
}

export default class Wheel extends Component {
  constructor(props) {
    super(props);
    this.wheelRef = createRef();

    this.state = {
        counter: props.initialValue,
        currentRotationValue: 90 - 360/props.childCount * props.initialValue,
    }
  }   

  componentDidMount() {
    const { childCount } = this.props;
    setInterval(() => { 

        if(this.state.counter !== this.props.getCurrentCount()) {
            this.setState({currentRotationValue: 90 - (this.state.counter+1) * 360/childCount}, () => {
                this.setState({ counter: this.props.getCurrentCount() });
            });
        }
        
    }, 
    1000);
  }

  render() {
    const { childCount, unitName, width, limit } = this.props;
    const { counter, currentRotationValue } = this.state;
    const temp = 360 / childCount;
    
    return (
      <div className='wheel-container'>
        <div className={`wheel rotateWheel`} ref={this.wheelRef} style={{
            width: width,
            "--d": `${temp}deg`,
            "--rot": `${currentRotationValue + temp}deg`    
        }}>
            { array(childCount).map((number, i) => 
                <div key={i}
                    className={`number ${(counter === number || ( counter === 0 && number === limit )) && 'selected'}`}
                    style={{
                        "--i": i,
                        "--d": `${temp}deg`,
                    }}
                    >
                    <div>{number} {unitName}</div></div>
            ) }
        </div>
      </div>  
    )
  }
}
