import React, { Component } from 'react';
import App from './App';
import '../App.css';

class StartButton extends Component {
  constructor(props){
    super(props)
  }


  render () {
    return (
      <button className={this.props.className}> START </button>
    )
  }

}

export default StartButton;
