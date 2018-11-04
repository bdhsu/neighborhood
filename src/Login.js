import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';
import './App.css';
import Signup from './Signup.js'

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
    this.state = ({
        user: null,
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
}

  // Call Firebases' signinWithEmailAndPassword function and pass in email and password
  login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{}).catch((error) => {
        console.log(error);
    });
    // Bring up LOG in screen
  }

  // Creates user with specificed email and password
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
      // Brings up Sign up page
    (this.state.user) ? ( <Signup/>) : (<Login />);
  }


  render() {
    return (
        <div id="parent">
            <div id="child" className="container col-md-6">
                <form>
                    <h1>Welcome to [NAME]</h1>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                    <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
                </form>
            </div>
        </div>
    );
}

}
export default Login;