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
            <div>
                <h1>{this.props.card.title}</h1>
                <p>{this.props.card.body}</p>
            </div>
        )
    }
}