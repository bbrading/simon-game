import React, { Component } from 'react';
import App from './App';
import '../App.css';

class GameButton extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.highLightColor()
  }

  hightLightColor(){

  }

  render() {
    return (
      <button className={this.props.className} onClick={this.handleClick}> </button>
    )
  }

}

export default GameButton;
