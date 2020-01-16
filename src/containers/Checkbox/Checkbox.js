import React, { Component } from 'react';
import classes from './Checkbox.module.css';

export default class Checkbox extends Component {
  state = {
    checked: false,
  };

  render() {
    const checkboxStyle = {};

    if (this.props.color) {
      checkboxStyle['color'] = this.props.color;
    }

    console.log(checkboxStyle)
  
    return (
      <label className={classes.CheckboxWrapper} style={checkboxStyle}>
        <input type="checkbox" className={classes.Checkbox}></input>
        <span className={classes.LabelText}>
          {this.props.text}
        </span>
      </label>
    );
  };
};
