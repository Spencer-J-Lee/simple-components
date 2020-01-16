import React from 'react';
import Checkbox from './containers/Checkbox/Checkbox';
import Switch from './containers/Switch/Switch';
import DisplayBox from './components/DisplayBox/DisplayBox';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <DisplayBox title="Checkbox">
        <div className={classes.CheckboxesWrapper}>
          <Checkbox text="Joseph Joestar"/>
          <Checkbox text="Dio Brando"/>
          <Checkbox text="Michael Jackson"/>
        </div>
      </DisplayBox>
      <DisplayBox title="Switch/Toggle">
        <div className={classes.CheckboxesWrapper}>
          <Switch text="Option 1"/>
          <Switch text="Option 2"/>
          <Switch text="Option 3"/>
        </div>
      </DisplayBox>
      <DisplayBox title="Slider">

      </DisplayBox>
      <DisplayBox title="Menu">

      </DisplayBox>
      <DisplayBox title="Progress Bar">

      </DisplayBox>
    </div>
  );
}

export default App;
