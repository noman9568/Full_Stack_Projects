import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const Register = ({ regData }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const data = { name, email, password };
  const navigate = useNavigate();
  const handleregister = (e) => {
    e.preventDefault();
    alert("User Registered!");
    regData(data);
    navigate('/login');
  };
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            id="name"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label for="Email1">Email address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="Email1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="Password1">Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="Password1"
            placeholder="Password"
          />
        </div>

        <button onClick={handleregister} className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;