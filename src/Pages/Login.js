import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { authentication } from "../App";

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange=(e)=>{
        this.setState({...this.state,[e.target.name]: e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        var original_email = localStorage.getItem('email');
        var original_pass = localStorage.getItem('password');
        if(original_email==this.state.email && original_pass==this.state.password){
            localStorage.setItem('auth',true);
            authentication.onAuthentication();
            this.props.history.push('/home');
        }else{
            alert('Email or Password is incorrect');
        }
    }

    render() {
        return (
            <div className='reg'>
                <form onSubmit={this.handleSubmit}>
                    <h1 style={{marginBottom:'40px'}}>Login</h1>
                    <div className='form-content'>
                        <label>Email id</label>
                        <input type='email' name='email' onChange={this.handleChange} placeholder='Enter your Email id' className='form-input' />
                    </div>
                    <div className='form-content'>
                        <label>Password</label>
                        <input type='password' name='password' onChange={this.handleChange} placeholder='Enter the password' className='form-input'/>
                    </div>
                    <button type='submit'>Submit</button>
                    <div style={{textAlign: 'left', paddingLeft: '20px'}}>
                        <Link to='/registration'>Not a user?</Link>
                    </div>
                </form>
            </div>
        )
    }
}
