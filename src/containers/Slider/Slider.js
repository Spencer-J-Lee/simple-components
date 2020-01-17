import React, { Component } from 'react';
import classes from './Slider.module.css';

export default class Slider extends Component {
  state = {
    sliderValue: 50,
  }

  changeHandler = event => {
    this.setState({ sliderValue: event.target.value });
  };

  render() {
    return (
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={this.state.sliderValue}
        onChange={this.changeHandler}
        className={classes.Slider}/>
    );
  };
};
