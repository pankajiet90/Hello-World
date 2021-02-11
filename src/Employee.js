import React, { Component } from 'react'

export default class componentName extends Component {

    constructor(){
        super();
        this.state={
            users:null,
            
           
        }
    }
    componentDidMount(){

        fetch ("https://reqres.in/api/users").then((resp)=>{
            resp.json().then((result)=>{
                // console.log(result.data)
        
                 this.setState({users:result.data})
            })
        })
       
    }
    render() {
        // console.log(this.state.users)
        const users=this.state.users;
        console.log(users)
        // console.log(data)
        return (
            <div>
            <h1>api call</h1>
            {
                users ? users.map((item,i)=>
                <div>
                <p>--{i}-- name: {item.first_name}---
                 email: {item.email}</p>
                <img src={item.avatar}/>
                </div>)
                :<p>plese wait</p>
            }
            </div>   
        )
    }
}
