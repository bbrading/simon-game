import React, { Component } from 'react';
import GameButton from './GameButton';
import StartButton from './StartButton';
import StrictModeButton from './StrictModeButton'
import '../App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {simonSequence: [], userSequence: [], counter: 1,}
  }

  render() {
    return (
      <div className="App">
        <div>
          <GameButton className= "greenbtn" defaultColor="green" highlightColor="lime-green"/>
          <GameButton className="redbtn"/>
        </div>
        <div>
          <GameButton className="yellowbtn"/>
          <GameButton className="bluebtn"/>
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
