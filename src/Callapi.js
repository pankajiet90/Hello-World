import React, { Component } from 'react'

export default class componentName extends Component {
    constructor(){
        super();
        this.state={
            users:null
        }
    }
    componentDidMount (){
        fetch("https://reqres.in/api/users")
        .then((resp)=>{resp.json()})
        .then((result)=>{console.log(result)})
    }
    render() {
        return (
            <div>
                <h1>call api </h1>
            </div>
        )
    }
}
