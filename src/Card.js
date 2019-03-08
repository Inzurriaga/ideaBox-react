import React, { Component } from "react"

export default class Card extends Component{
    constructor(){
        super();
        this.state = {
            true: true
        }
    }

    deleteCard = () => {
        let cardIndex = this.props.cards.indexOf(this.props.card)
        this.props.cards.splice(cardIndex, 1)
        localStorage.setItem("ideaCard", JSON.stringify(this.props.cards))
        this.props.updateUserCards(this.props.cards)
    }

    increaseQuality = () => {
        console.log("increase")
    }

    decreaseQuality = () => {
        console.log("decrease")
    }

    render(){
        return(
            <section className="card-section">
                <h2>{this.props.card.title}</h2>
                <p>{this.props.card.body}</p>
                <div>
                    <button onClick={this.decreaseQuality}></button>
                    <button onClick={this.increaseQuality}></button>
                    <p>quality: {this.props.card.quality}</p>
                    <button onClick={this.deleteCard}></button>
                </div>
            </section>
        )
    }
}