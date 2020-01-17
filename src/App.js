import React, { Component } from 'react';
import Checkbox from './containers/Checkbox/Checkbox';
import Switch from './containers/Switch/Switch';
import Slider from './containers/Slider/Slider';
import Button from './components/Button/Button';
import ProgressBar from './containers/ProgressBar/ProgressBar';
import DisplayBox from './components/DisplayBox/DisplayBox';
import classes from './App.module.css';

class App extends Component {
  state = {
    msgs: [
      "Wait, JK.",
      "Pls stop",
      "No srsly, cmon",
      "SENPAI, ONEGAI!!",
      ". . ."
    ],
    index: -1,
  };

  changeTextHandler = event => {
    const newIdx = this.state.index + 1;
    if (!this.state.msgs[newIdx]) {
      return;
    }
    event.target.innerHTML = this.state.msgs[newIdx];
    this.setState({ index: newIdx });
  }

  render() {
    return (
      <div className={classes.App}>
        <DisplayBox title="Checkbox">
          <div className={classes.ContentWrapper}>
            <Checkbox text="Joseph Joestar"/>
            <Checkbox text="Dio Brando"/>
            <Checkbox text="Michael Jackson"/>
          </div>
        </DisplayBox>

        <DisplayBox title="Switch/Toggle">
          <div className={classes.ContentWrapper}>
            <Switch text="Option 1"/>
            <Switch text="Option 2"/>
            <Switch text="Option 3"/>
          </div>
        </DisplayBox>

        <DisplayBox title="Slider">
          <div className={classes.SlidersWrapper}>
            <Slider />
            <div className={classes.VertSliderWrapper}>
              <Slider vertical='true'/>
            </div>
          </div>
        </DisplayBox>

        <DisplayBox title="Button">
          <Button clicked={this.changeTextHandler}>Click Me</Button>
        </DisplayBox>

        <DisplayBox title="Progress Bar">
          <ProgressBar />
        </DisplayBox>
      </div>
    );
  };
}

export default App;
