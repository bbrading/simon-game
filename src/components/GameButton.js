import React, { Component } from 'react';
import App from './App';
import '../App.css';

class GameButton extends Component {
  constructor(props) {
    super(props)
  }

  highLightColor(e){
    e.target.className = this.props.highLightColor
  }

  handleClick(e) {
    this.highLightColor(e)
  }



  render() {
    return (
      <button
      className={this.props.className}
      onClick={this.handleClick.bind(this)}
      >
      </button>
    )
  }

}

export default GameButton;
