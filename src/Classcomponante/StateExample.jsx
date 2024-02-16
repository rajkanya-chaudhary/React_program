import React, { Component } from "react";
export default class StateExample extends Component {
    constructor()
    {
        super()
        this.state = {
            num : 1
        }
    }
    decrement()
    {
        if(this.state.num > 1)
        this.setState({num : this.state.num - 1})
    }
    increment()
    {
        this.setState({num : this.state.num + 1})
    }
    render()
    {
        return(
            <>
            <h1>Class Component State Example</h1>
            <h2>This is Sample Component </h2>
            <h3> nun = {this.state.num}</h3>
            <button onClick={() => this.decrement()}>Decrement</button>
            <button onClick={() => this.increment()}>Increment</button>
            </>
        )
    }


}