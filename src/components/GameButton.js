import React, { Component } from 'react';
import App from './App';
import '../App.css';

class GameButton extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    //this.makeSound()
    //this.highlightColor()
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.handleClick}> </button>
    )
  }

}

export default GameButton;
