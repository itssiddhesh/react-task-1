import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',  
          email: '',
          password: '',
          phone: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange=(e)=>{
          this.setState({...this.state,[e.target.name]: e.target.value},()=>{
              console.log(this.state)
          })
      }

      handleSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.name || !this.state.email ||!this.state.password ||!this.state.phone){
            alert('Enter all fields')
        }else{
            localStorage.setItem('name',this.state.name);
            localStorage.setItem('password',this.state.password);
            localStorage.setItem('phone',this.state.phone);
            localStorage.setItem('email',this.state.email);
            this.props.history.push('/');
        }
      }

    render() {
        return (
            <div className='reg'>
                <form onSubmit={this.handleSubmit}>
                    <h1 style={{marginBottom:'40px'}}>Registration</h1>
                    <div className='form-content'>
                        <label>Name</label>
                        <input type='text' name='name' onChange={this.handleChange} placeholder='Enter your Full name' className='form-input' />
                    </div>
                    <div className='form-content'>
                        <label>Email id</label>
                        <input type='email' name='email' onChange={this.handleChange} placeholder='Enter your Email id' className='form-input' />
                    </div>
                    <div className='form-content'>
                        <label>Password</label>
                        <input type='password' name='password' onChange={this.handleChange} placeholder='Write a password' className='form-input'/>
                    </div>
                    <div className='form-content'>
                        <label>Phone No.</label>
                        <input type='tel' name='phone' onChange={this.handleChange} placeholder='Enter your Phone number[10]' className='form-input' pattern='[0-9]{10}' />
                    </div>
                    <button type='submit'>Submit</button>
                    <div style={{textAlign: 'left', paddingLeft: '20px'}}>
                        <Link to='/'>Already a user</Link>
                    </div>
                </form>
            </div>
        )
    }
}
