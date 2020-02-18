import React, { useState } from "react";
// import {} from 'react-router-dom'
import { useHistory,Link } from "react-router-dom";
import { connect } from "react-redux";
import { BACKENDAPI } from "../constants";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    fetch(BACKENDAPI + "users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if(data.id){
        props.dispatch({
          type: "LOGIN",
          user: data.id,
          wallet: data.wallet,
          name: data.name
        })
        history.push("/portfolio");
      }else{
        setErrors(data)
      }
        
      });
  };

  return (
    <div class="account-form">
      <form onSubmit={e => handleSubmit(e)}>
        <h1>Sign IN</h1>
        <div class="errors">{errors.map(error => <h5>{error}</h5>)}</div>
        <h3>Email</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></input>
        <h3>Password</h3>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>
        <br/>
        <Link to='/signup'>Create Account</Link>
        <br/>
        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Login);
