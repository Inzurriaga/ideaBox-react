import React, { Component } from 'react';
import Header from "./Header"
import CardCreateForm from "./CardCreateForm"
import CardContainer from "./CardContainer"
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: "",
      cards: [],
      filterCard: []
    }
  };

  componentDidMount(){
    let cards = JSON.parse(localStorage.getItem("ideaCard"))
    if(cards){
      this.setState({
        cards: cards
      })
    }else{
      console.log("no cards in localStorage")
    }
  };

  updateUserSearch = (userInputSearch) => {
    this.setState({
      searchInput: userInputSearch
    })
  };

  render() {
    return (
      <div className="App">
        <Header updateUserSearch={this.updateUserSearch}/>
        <CardCreateForm />
        <CardContainer />
      </div>
    );
  }
}

