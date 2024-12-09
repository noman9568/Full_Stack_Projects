import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({regLogin}) => {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const handleLogin = (e)=>{
    e.preventDefault();
    if(email == regLogin.email & password == regLogin.password){
      alert("Login Successful!");
    }
    else {
      alert('Invalid Credentials!');
    }
  }
  return (
    <div>
      <form>
  <div className="form-group">
    <label for="Email1">Email address</label>
    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="Email1" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="Password1">Password</label>
    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="Password1" placeholder="Password" />
  </div>
  <button className="btn btn-primary" onClick={handleLogin}>Login</button>
</form>
    </div>
  )
}

export default Login
