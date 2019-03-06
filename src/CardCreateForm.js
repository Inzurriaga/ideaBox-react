import React, { Component } from "react"

export default class CreateCard extends Component {
    constructor(){
        super();
        this.state = {
            cardTitle: "",
            cardBody: ""
        }
    }

    render(){
        return(
            <form>
                <label>
                    title
                    <input type="text"></input>
                </label>
                <label>
                    body
                    <textarea></textarea>
                </label>
                <input type="submit"></input>
            </form>
        )
    }
}