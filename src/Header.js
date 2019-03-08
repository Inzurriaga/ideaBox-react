import React, { Component } from "react"

export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            searchInput: ""
        }
    }

    userChangeInput = e => {
        this.setState({
            searchInput: e.target.value
        })
    };

    submitSearch = () => {
        this.props.updateUserSearch(this.state.searchInput)
    }

    render(){
        return(
            <section className="header-section">
                <h1>ideabox</h1>
                <div>
                    <input onChange={this.userChangeInput} type="text"></input>
                    <button onClick={this.submitSearch}></button>
                </div>
            </section>
        )
    }
}