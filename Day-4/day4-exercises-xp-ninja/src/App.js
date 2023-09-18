import React, { Component } from 'react';
import { monthNames } from './constants';
import Clock from './Components/Clock';

export default class App extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDay(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
  }
  render() {
    const { year, month } = this.state;
    return (
      <div className='page-container'>
        <div className='year'>
          <h2>{ year }<span>/Year</span></h2>
        </div>
        <div className='monthname'>
          <h2>{ monthNames[month] }</h2>
        </div>
        <Clock />
      </div>
    )
  }
}
