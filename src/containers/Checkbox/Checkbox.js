import React, { Component } from 'react';
import classes from './Checkbox.module.css';

export default class Checkbox extends Component {
  state = {
    checked: false,
  };

  checkedHandler = () => {
    this.setState(prevState => {
      return { checked: !prevState.checked };
    });
  };

  render() {
    const checkboxStyle = {};

    if (this.props.color) {
      checkboxStyle['color'] = this.props.color;
    }

    return (
      <label className={classes.CheckboxWrapper} style={checkboxStyle}>
        <input 
          type="checkbox" 
          className={classes.Checkbox}
          disabled={this.props.disabled}
          checked={this.state.checked}
          onChange={this.checkedHandler}></input>
        <span className={classes.LabelText}>
          {this.props.text}
        </span>
      </label>
    );
  };
};
