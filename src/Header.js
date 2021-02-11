import React, { Component } from 'react'

export class Header extends Component {
    constructor(){
        super();
        this.state={
            count : 100
        }
        this.setCount=this.setCount.bind(this)
        this.setDecrease=this.setDecrease.bind(this)
    };
    setCount (){
        this.setState({count:this.state.count +1})
    }
    setDecrease (){
        this.setState({count:this.state.count -1})
    }
    render() {
        return (
            <div>
                <h1>
                    count : {this.state.count}
                </h1>
                <button onClick={this.setCount}>Increase</button>
                <button onClick={this.setDecrease}>Dcrease</button>
            </div>
        )
    }
}

export default Header
