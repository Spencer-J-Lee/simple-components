import React, { Component } from 'react'
import Button from '../../components/Button/Button';
import classes from './ProgressBar.module.css';

export default class ProgressBar extends Component {
  state = {
    counter: 0,
  };

  minusHandler = amt => {
    let newVal = this.state.counter - amt;
    if (newVal < 0) {
      newVal = 0;
    }
    this.setState({ counter: newVal });
  };

  plusHandler = amt => {
    let newVal = this.state.counter + amt;
    if (newVal > 100) {
      newVal = 100;
    }
    this.setState({ counter: newVal });
  };

  render() {
    const progressBarClasses = [classes.ProgressBar];
    const counter = this.state.counter;

    switch (true) {
      case (counter < 30):
        progressBarClasses.push(classes.Red);
        break;
      case (counter < 60):
        progressBarClasses.push(classes.Orange);
        break;
      case (counter < 99):
        progressBarClasses.push(classes.Yellow);
        break;
      case (counter === 100):
        progressBarClasses.push(classes.Green);
        break;
      default:
        break;
    }

    return (
      <div className={classes.ProgressBarWrapper}>
        <div className={classes.ProgressHolder}>
          <div 
            className={progressBarClasses.join(' ')}
            style={{ width: `${this.state.counter}%`}}></div>
        </div>
        
        <div className={classes.Btns5}>
          <Button clicked={() => this.minusHandler(5)}>-5</Button>
          <Button clicked={() => this.plusHandler(5)}>+5</Button>
        </div>
        
        <div className={classes.Btns10}>
          <Button clicked={() => this.minusHandler(10)}>-10</Button>
          <Button clicked={() => this.plusHandler(10)}>+10</Button>
        </div>
      </div>
    )
  }
}
