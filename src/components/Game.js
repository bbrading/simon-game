import React, { Component } from 'react';
import GameButton from './GameButton';
//import StartButton from './StartButton';
import StrictModeButton from './StrictModeButton'
import '../App.css';


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      simonSequence: [],
      userSequence: [],
      counter: 0,
      greenButtonClass: "greenbtn",
      redButtonClass: "redbtn",
      yellowButtonClass: "yellowbtn",
      blueButtonClass: "bluebtn",
    };
    this.highLightColor = this.highLightColor.bind(this);
  }

  highLightColor(buttonClass){
    if(buttonClass === "greenbtn"){
      this.setState({greenButtonClass: "clickedgreenbtn"})
      setTimeout(function(){this.setState({greenButtonClass: "greenbtn"})}.bind(this), 1000)
    }

    if(buttonClass === "redbtn"){
      this.setState({redButtonClass: "clickedredbtn"})
      setTimeout(function(){this.setState({redButtonClass: "redbtn"})}.bind(this), 1000)
    }

    if(buttonClass === "yellowbtn"){
      this.setState({yellowButtonClass: "clickedyellowbtn"})
      setTimeout(function(){this.setState({yellowButtonClass: "yellowbtn"})}.bind(this), 1000)
    }

    if(buttonClass === "bluebtn"){
      this.setState({blueButtonClass: "clickedbluebtn"})
      setTimeout(function(){this.setState({blueButtonClass: "bluebtn"})}.bind(this), 1000)
    }

  }

  checkMove(){
    if(this.state.simonSequence === this.state.userSequence){
      this.counterIncrease()
    }
  }

  counterIncrease() {
    this.setState({counter: this.state.counter + 1});
  }

  getRandomButton(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (min - max)) + max
  }

  startSequence() {
    var gameButtonArray = [this.state.greenButton, this.state.redButton, this.state.yellowButton, this.state.blueButton];
    var n = this.getRandomButton(0,3)
    this.setState({counter: 0})
    this.setState({simonSequence: []})
    debugger
    this.setState({simonSequence: this.state.simonSequence.push(gameButtonArray[n])});
    this.state.greenButton.toggleColors
  }

  render() {
    return (
      <div className="App">
        <div>
          <GameButton
            currentClass={this.state.greenButtonClass}
            highLightColor={this.highLightColor}
            checkMove={this.checkMove.bind(this)}/>
          <GameButton
            currentClass={this.state.redButtonClass}
            highLightColor={this.highLightColor}
            checkMove={this.checkMove.bind(this)}/>
        </div>
        <div>
          <GameButton
            currentClass={this.state.yellowButtonClass}
            highLightColor={this.highLightColor}
            checkMove={this.checkMove.bind(this)}/>
          <GameButton
            currentClass={this.state.blueButtonClass}
            highLightColor={this.highLightColor}
            checkMove={this.checkMove.bind(this)}/>
        </div>
        <div>
          <p className="counter">{this.state.counter}</p>
        </div>
        <div>
          <button className="startbtn" onClick={this.startSequence.bind(this)}> Start </button>
          <StrictModeButton className="strictbtn"/>
        </div>
      </div>
    );
  }
}

export default Game;
