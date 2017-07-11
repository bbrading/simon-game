import React, { Component } from 'react';
import App from './App';
import '../App.css';

class StartButton extends Component {
  constructor(props){
    super(props)
  }

startSequence() {
  
}

  render () {
    return (
      <button className={this.props.className} onClick={this.startSequence.bind(this)}> START </button>
    )
  }

}

export default StartButton;
