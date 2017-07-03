import React, { Component } from 'react';
import App from './App';
import '../App.css';

class StrictModeButton extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <button className={this.props.className}> STRICT </button>
    )
  }

}









export default StrictModeButton;
