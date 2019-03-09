import React, { Component } from 'react';
import Header from "./Header"
import CardCreateForm from "./CardCreateForm"
import CardContainer from "./CardContainer"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: "",
      cards: []
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

  updateUserCards = (cards) => {
    this.setState({
      cards: cards
    })
  };

  render() {
    return (
      <div className="App">
        <Header updateUserSearch={this.updateUserSearch}/>
        <CardCreateForm updateUserCards={this.updateUserCards}
                        cards={this.state.cards}/>
        <CardContainer cards={this.state.cards}
                        updateUserCards={this.updateUserCards}
                        searchInput={this.state.searchInput}/>
      </div>
    );
  }
}

