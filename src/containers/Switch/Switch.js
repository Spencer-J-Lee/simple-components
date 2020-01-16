import React, { Component } from 'react'
import classes from './Switch.module.css';

export default class Switch extends Component {
  render() {
    return (
      <label className={classes.SwitchWrapper}>
        <span className={classes.LabelText}>
          {this.props.text}
        </span>
        
        <input type="checkbox" className={classes.Checkbox}></input>
        <div className={classes.Toggle}>
          <div className={classes.Circle}></div>
        </div>
      </label>
    )
  }
}
