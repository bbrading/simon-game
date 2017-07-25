import React, { Component } from 'react';
import '../App.css';

class GameButton extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.highLightColor(this.props.currentClass)
    this.props.checkMove(this.props.currentClass)
  }

  render() {
    return (
      <button
      className={this.props.currentClass}
      onClick={this.handleClick}
      >
      </button>
    )
  }

}

export default GameButton;
