import React, { Component } from "react"

export default class Card extends Component{
    constructor(){
        super();
        this.state = {
            true: true
        }
    }

    render(){
        return(
            <section className="card-section">
                <h2>{this.props.card.title}</h2>
                <p>{this.props.card.body}</p>
            </section>
        )
    }
}