import React, { Component } from 'react';
import GameButton from './GameButton';
import StartButton from './StartButton';
import StrictModeButton from './StrictModeButton'
import '../App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      simonSequence: [],
      userSequence: [],
      counter: 1,
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <GameButton defaultColor="greenbtn" clickedColor="clickedgreenbtn"/>
          <GameButton defaultColor="redbtn" clickedColor="clickedredbtn"/>
        </div>
        <div>
          <GameButton defaultColor="yellowbtn" clickedColor="clickedyellowbtn"/>
          <GameButton defaultColor="bluebtn" clickedColor="clickedbluebtn"/>
        </div>
        <div>
          <p className="counter">{this.state.counter}</p>
        </div>
        <div>
          <StartButton className="startbtn"/>
          <StrictModeButton className="strictbtn"/>
        </div>
      </div>
    );
  }
}

export default App;
