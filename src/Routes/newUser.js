import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// check is user input is valid
function checkUser(a, b, c, d){
  if (a === '' || b === '' || c === '' || d === '') {
    console.log('Please enter valid information');  
  }
  else if (a !== '' && b !== '' && c !== '' && d !== ''){
    console.log('User successfully created');
  }
};

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', lastName: '', email: '', password: ''}
    
    this.handleChange = this.handleChange.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  
  handleChange(event){
    event.preventDefault();
    this.setState({ name: event.target.value })
  };

  handleLastName(event){
    event.preventDefault();
    this.setState({ lastName: event.target.value })
  };

  handleEmail(event){
    event.preventDefault();
    this.setState({ email: event.target.value })
  };

  handlePassword(event){
    event.preventDefault();
    this.setState({ password: event.target.value })
  };

  render() {
    return (
      <div className='A'>

        <div className='headContainer'>
          <header>Mass Diplomacy EMP</header>
        </div>

        <div className='navContainer'>
          <div className="navbar">
            <Link to="/"><button >HOME</button></Link>
            <button>ACCOUNT</button>
            <Link to="/survey"><button>SURVEY</button></Link>
            <button>RESULTS</button>
            <button>ABOUT</button>
          </div>
        </div>

        <div className='newUserContainer'>
          <header className='userHead'>
            Get started
          </header>
          <br/>
          <form id="form1" >
            <label>First Name </label>
            <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="First Name" />
            <p>
              <label> Last Name </label>
              <input type="text" value={this.state.lastName} onChange={this.handleLastName} placeholder="Last Name" />
            </p>
            <p>
              <label>E-mail </label>
              <input type="text" value={this.state.email} onChange={this.handleEmail} placeholder="e-mail" id="username" />
            </p>
            <p>
              <label>Password </label>
              <input tpye='text' value={this.state.password} onChange={this.handlePassword} placeholder='password' id='password' />
            </p>
            <p>
              <label>Confirm Password </label>
              <input type="text" placeholder="confirm password" id="password" />
            </p>
          </form>
          <p>
            <button className="reg" onClick={() => {checkUser(this.state.name, this.state.lastName, this.state.email, this.state.password)}}>REGISTER</button>
          </p>
          <Link to='/login'><button>Return to login</button></Link>
        
        </div>
      </div>
    );
  }
};
export default RegisterUser;

