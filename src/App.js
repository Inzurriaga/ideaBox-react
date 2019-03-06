import React, { Component } from 'react';
import Header from "./Header"
import CardCreateForm from "./CardCreateForm"
import CardContainer from "./CardContainer"
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      true: true
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <CardCreateForm />
        <CardContainer />
      </div>
    );
  }
}

