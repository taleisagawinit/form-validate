import React, { Component } from 'react'
import validator from 'validator'



class Form extends Component {
  state = {
    name:'',
    email:'',
    password:'',
    confirmpass:'',
    website:'',
    nameErr:'',
    emailErr:'',
    passwordErr:'',
    confirmpassErr:'',
    websiteErr:'',
    nameClass:'',
    emailClass:'',
    passwordClass:'',
    confirmpassClass:'',
    websiteClass:'',
  }

  handleChange = (e) => {
    console.log(this)
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    let error = false;
    //check username
    if (!validator.isLength(this.state.name, {min: 4})) {
      error = true
      this.setState({
        nameErr:'username must be at least 4 chars',
        nameClass:'error'
      })
    } else {
      this.setState({
        nameErr:'',
        nameClass:'',
      })
    }

    if (!validator.isEmail(this.state.email)) {
      error = true
      this.setState({
        emailErr:'must be a valid email',
        emailClass:'error'
      })
    } else {
      this.setState({
        emailErr:'',
        emailClass:''
      })
    }

    if (!validator.isLength(this.state.password, {min: 6})) {
      error = true
      this.setState({
        passwordErr:'password must be at least 6 chars',
        passwordClass:'error'
      })
    } else {
      this.setState({
        passwordErr:'',
        passwordClass:''
      })
    }

    if (!validator.equals(this.state.password, this.state.confirmpass)) {
      error = true
      this.setState({
        confirmpassErr:'passwords must match',
        confirmpassClass:'error'
      })
    } else {
      this.setState({
        confirmpassErr:'',
        confirmpassClass:''
      })
    }

    if (!validator.isURL(this.state.website)) {
      error = true
      this.setState({
        websiteErr:'must be a valid url',
        websiteClass:'error'
      })
    } else {
      this.setState({
        websiteErr:'',
        websiteClass:''
      })
    }

    if (!error) {
      this.props.history.push("/thankyou")
    }

  }
 
  render() {
    return (
    //name email pass confirmpass website
    //validator and normalize
    <form onSubmit={this.handleSubmit}>
      <div>
        <h2>profile form - all fields required</h2>
      </div>
      <label htmlFor="name" className={this.state.nameClass}>
        {this.state.nameErr ? this.state.nameErr : "username"}
      </label>
      <div className={"input " + this.state.nameClass}>
        <input 
          type="text" 
          id="text" 
          name="name" 
          onChange={this.handleChange}>
        </input>
      </div>
      <label htmlFor="email" className={this.state.emailClass}>
        {this.state.emailErr ? this.state.emailErr : "email"}
      </label>
      <div className={"input " + this.state.emailClass}>
        <input 
          type="email" 
          id="email" 
          name="email"
          onChange={this.handleChange}>
        </input>
      </div>
      <label htmlFor="pass" className={this.state.passwordClass}>
        {this.state.passwordErr ? this.state.passwordErr : "password"}
      </label>
      <div className={"input " + this.state.passwordClass}>  
        <input 
          type="password" 
          id="password" 
          name="password" 
          onChange={this.handleChange}>
        </input>
      </div>
      <label htmlFor="confirmpass" className={this.state.confirmpassClass}>
        {this.state.confirmpassErr ? this.state.confirmpassErr : "confirm password"}
      </label>
      <div className={"input " + this.state.confirmpassClass}>  
        <input 
          type="password" 
          id="confirmpass" 
          name="confirmpass" 
          onChange={this.handleChange}>
        </input>
      </div>
      <label htmlFor="website" className={this.state.websiteClass}>
        {this.state.websiteErr ? this.state.websiteErr : "website"}
      </label>
      <div className={"input " + this.state.websiteClass}>  
        <input 
          type="url" 
          id="website" 
          name="website"
          onChange={this.handleChange}>
        </input>
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
    )
  }
}

export default Form

