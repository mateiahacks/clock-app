import React, { Component } from 'react';
import Wheel from './Wheel';

const seconds = 1000;

export default class Clock extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDay(),
        date: date.getDate(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds() + 1,
    }
  }

  setSeconds = (seconds) => {
    this.setState({ seconds: seconds });
  }

  render() {
    return (
      <div className='clock'>
        <Wheel 
        initialValue={this.state.seconds}
        childCount={60}
        unitName={'sec'}
        width={1000}
        limit={60}
        timeInterval={seconds}
        getCurrentCount={() => new Date().getSeconds()}
        />
        <Wheel 
        initialValue={this.state.minutes}
        childCount={60}
        unitName={'min'}
        width={850}
        timeInterval={seconds*60}
        getCurrentCount={() => new Date().getMinutes()}
        />
        <Wheel 
        initialValue={this.state.hour}
        childCount={24}
        unitName={'hr'}
        width={700}
        timeInterval={seconds*60*60}
        getCurrentCount={() => new Date().getHours()}
        />
        <Wheel 
        initialValue={this.state.date}
        childCount={30}
        unitName={'day'}
        width={550}
        timeInterval={seconds*60*60*24}
        getCurrentCount={() => new Date().getDate()}
        />
        <Wheel 
        initialValue={this.state.day + 1}
        childCount={7}
        unitName={'week'}
        width={400}
        timeInterval={seconds*60*60*24*7}
        getCurrentCount={() => new Date().getDay() + 1}
        />
        <Wheel 
        initialValue={this.state.month + 1}
        childCount={12}
        unitName={'month'}
        width={200}
        timeInterval={seconds*60*60*24*7*4}
        getCurrentCount={() => new Date().getMonth() + 1}
        />
      </div>
    )
  }
}
