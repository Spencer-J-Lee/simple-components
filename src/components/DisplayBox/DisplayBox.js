import React from 'react';
import classes from './DisplayBox.module.css';

const displayBox = props => {
  return (
    <div className={classes.DisplayBox}>
      <p className={classes.Title}>{props.title}</p>
      <div className={classes.Content}>
        {props.children}
      </div>
    </div>
  )
};

export default displayBox;
