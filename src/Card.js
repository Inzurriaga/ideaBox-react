import React, { Component } from "react"
import { ReactComponent as Delete } from "./image/delete.svg"
import { ReactComponent as Downvote } from "./image/downvote.svg"
import { ReactComponent as Upvote } from "./image/upvote.svg"

export default class Card extends Component{
    deleteCard = () => {
        let cardIndex = this.props.cards.indexOf(this.props.card)
        this.props.cards.splice(cardIndex, 1)
        localStorage.setItem("ideaCard", JSON.stringify(this.props.cards))
        this.props.updateUserCards(this.props.cards)
    }

    increaseQuality = () => {
        let { quality } = this.props.card
        let cardIndex = this.props.cards.indexOf(this.props.card)
        if(quality === "Swill"){
            this.props.card.quality = "Plausible"
            this.props.cards.splice(cardIndex, 1, this.props.card)
        }else{
            this.props.card.quality = "Genius"
            this.props.cards.splice(cardIndex, 1, this.props.card)
        }
        localStorage.setItem("ideaCard", JSON.stringify(this.props.cards))
        this.props.updateUserCards(this.props.cards)
    }

    decreaseQuality = () => {
        let { quality } = this.props.card
        let cardIndex = this.props.cards.indexOf(this.props.card)
        if(quality === "Genius"){
            this.props.card.quality = "Plausible"
            this.props.cards.splice(cardIndex, 1, this.props.card)
        }else{
            this.props.card.quality = "Swill"
            this.props.cards.splice(cardIndex, 1, this.props.card)
        }
        localStorage.setItem("ideaCard", JSON.stringify(this.props.cards))
        this.props.updateUserCards(this.props.cards)
    }

    render(){
        return(
            <section className="card-section">
                <h2>{this.props.card.title}</h2>
                <p>{this.props.card.body}</p>
                <div>
                    <Downvote onClick={this.decreaseQuality}/>
                    <Upvote onClick={this.increaseQuality}/>
                    <p>quality: {this.props.card.quality}</p>
                    <Delete onClick={this.deleteCard}/>
                </div>
            </section>
        )
    }
}