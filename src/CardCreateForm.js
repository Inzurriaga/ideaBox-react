import React, { Component } from "react"

class Card{
    constructor(title, body, id){
        this.title = title;
        this.body = body;
        this.id = id
    }
}

export default class CreateCard extends Component {
    constructor(){
        super();
        this.state = {
            cardTitle: "",
            cardBody: ""
        }
    }

    userTitleInput = e => {
        this.setState({
            cardTitle: e.target.value
        })
    }

    userBodyInput = e => {
        this.setState({
            cardBody: e.target.value
        })
    }

    submitNewCard = e => {
        e.preventDefault()
        let id = new Date()
        let newCard = new Card(this.state.cardTitle, this.state.cardBody, id)
        this.props.cards.push(newCard)
        localStorage.setItem("ideaCard", JSON.stringify(this.props.cards))
        this.setState({
            cards: this.props.cards
        })
    }

    render(){
        return(
            <form>
                <label>
                    title
                    <input onChange={this.userTitleInput} type="text"></input>
                </label>
                <label>
                    body
                    <textarea onChange={this.userBodyInput}></textarea>
                </label>
                <input onClick={this.submitNewCard}type="submit"></input>
            </form>
        )
    }
}