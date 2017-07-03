import React, { Component } from 'react';
import GameButton from './GameButton'
import '../App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {simonSequence: [], userSequence: [], counter: 1, }
  }

  simonSoundGreen() {
  //  <embed src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" autoplay="false" loop="false"></embed>
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
      </div>
    );
  }
}

export default App;
