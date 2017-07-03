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
          <GameButton className= "greenbtn" defaultColor="greenbtn" highLightColor="clickedgreenbtn"/>
          <GameButton className="redbtn" defaultColor="redbtn" highLightColor="clickedredbtn"/>
        </div>
        <div>
          <GameButton className="yellowbtn" defaultColor="yellowbtn" highLightColor="clickedyellowbtn"/>
          <GameButton className="bluebtn" defaultColor="bluebtn" highLightColor="clickedbluebtn"/>
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
