import React, { Component } from 'react'
 class Login extends Component {
    constructor() {
        
          super();

        this.state={
            email:null,
            password:null,
            login:false,
            token:null
        }
        this.login=this.login.bind(this)
    }
    login(){
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <input type="email" onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="enter email"/><br/><br/>
                <input type="password"  onChange={(event)=>{this.setState({password:event.target.value})}} placeholder="enter password"/><br></br>
                <button type ="submit" onClick={()=>{this.login()}} >Loging</button>
            </div>
        )
    }
}


export default Login;
