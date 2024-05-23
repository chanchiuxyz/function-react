// import logo from './logo.svg';
import React, { Component } from 'react'

import DataInput from './components/DataInput';
import Card from './components/Card';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="page">
            
          <DataInput />
          <Card />
  </div>
    )
  }
}

