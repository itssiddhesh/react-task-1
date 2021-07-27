import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { authentication } from "../App";


export default class Home extends Component {

    constructor(props){
        super(props)
        this.logout=this.logout.bind(this);
        this.profile=this.profile.bind(this);
    }
    

    logout=()=>{
        authentication.onLogout();
        this.props.history.push('/');
    }

    profile=()=>{
        alert(`Name : ${localStorage.getItem('name')}\nEmail id : ${localStorage.getItem('email')}\nPhone No : ${localStorage.getItem('phone')}\n`)
    }

  render() {
    return (
      <div>
        <nav className="navbar">
        <button onClick={this.profile}>Profile</button>
          <button onClick={this.logout}>Logout</button>
        </nav>
        <div className='centered'>
          <h1>Welcome {localStorage.getItem("name")}</h1>
          <div>
          <img src="https://source.unsplash.com/random/200x200?sig=1" />
          <img src="https://source.unsplash.com/random/200x200?sig=2" />
          <img src="https://source.unsplash.com/random/200x200?sig=3" />
          <img src="https://source.unsplash.com/random/200x200?sig=4" />
          <img src="https://source.unsplash.com/random/200x200?sig=5" />
          <img src="https://source.unsplash.com/random/200x200?sig=6" />
          <img src="https://source.unsplash.com/random/200x200?sig=7" />
          <img src="https://source.unsplash.com/random/200x200?sig=8" />
          <img src="https://source.unsplash.com/random/200x200?sig=9" />
          <img src="https://source.unsplash.com/random/200x200?sig=10" />
          <img src="https://source.unsplash.com/random/200x200?sig=11" />
          <img src="https://source.unsplash.com/random/200x200?sig=15" />
          </div>
        </div>
      </div>
    );
  }
}
