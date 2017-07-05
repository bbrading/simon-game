import React, { Component } from 'react';
import App from './App';
import '../App.css';

class GameButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentClass: this.props.defaultColor,
    }
  }

  highLightColor(){
    this.setState({currentClass: this.props.clickedColor})
  }

  defaultColor(){
    this.setState({currentClass: this.props.defaultColor})
  }

  handleClick() {
    this.highLightColor()
    setTimeout(this.defaultColor.bind(this), 1000)
  }

  render() {
    return (
      <button
      className={this.state.currentClass}
      onClick={this.handleClick.bind(this)}
      >
      </button>
    )
  }

}

export default GameButton;
