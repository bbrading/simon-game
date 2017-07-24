import React, { Component } from 'react';
import GameButton from './GameButton';
import '../App.css';


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      simonSequence: [],
      userSequence: [],
      counter: 0,
      round: 0,
      greenButtonClass: "greenbtn",
      redButtonClass: "redbtn",
      yellowButtonClass: "yellowbtn",
      blueButtonClass: "bluebtn",
      tryAgain: "tryAgainHidden",
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

  checkMove(buttonClass){
    this.state.userSequence.push(buttonClass)
    this.setState({userSequence: this.state.userSequence})
    if (this.state.round === this.state.counter){
      if(this.state.simonSequence[this.state.round] === this.state.userSequence[this.state.round]){
        this.counterIncrease()
        this.setState({userSequence: []})
        setTimeout(this.playSequence.bind(this), 2000)
        }
      else {
        this.setState({tryAgain: "tryAgainVisible"})
        this.setState({userSequence: []})
        setTimeout(this.replaySequence.bind(this), 2000)
        }
    }
    else {
      if(this.state.simonSequence[this.state.round] === this.state.userSequence[this.state.round]){
          this.setState({round: this.state.round + 1 })
      }
      else {
        this.setState({tryAgain: "tryAgainVisible"})
        this.setState({userSequence: []})
        setTimeout(this.replaySequence.bind(this), 2000)
      }
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

  createSimonSequence(){
    var gameButtonArray = ["greenbtn", "redbtn", "yellowbtn", "bluebtn"];
    var n = this.getRandomButton(0,3)
    this.state.simonSequence.push(gameButtonArray[n])
    this.setState({simonSequence: this.state.simonSequence});
  }

  startSequence() {
    this.setState({simonSequence: []})
    this.setState({counter: 0})
    this.setState({round:0})
    this.createSimonSequence()
    this.highLightColor(this.state.simonSequence[0])
  }

  displaySequence(index) {
    var _this = this
    this.setState({round: 0})
    if(this.state.simonSequence.length > index){
      setTimeout(function() {
        _this.highLightColor(_this.state.simonSequence[index])
        _this.displaySequence(++index)}, 2000)
      }
    }

  playSequence() {
    this.createSimonSequence()
    setTimeout(this.displaySequence.bind(this)(0), 2000)
  }

  replaySequence() {
    this.setState({tryAgain: "tryAgainHidden"})
    setTimeout(this.displaySequence.bind(this)(0), 2000)
  }

  render() {
    return (
      <div className="App">
        <div>
          <p className={this.state.tryAgain}> TRY AGAIN </p>
        </div>
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
        </div>
      </div>
    );
  }
}

export default Game;
