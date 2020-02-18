import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BACKENDAPI } from "../constants";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    fetch(BACKENDAPI + "users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.id) {
          history.push("/");
        } else {
          setErrors(data);
        }
      });
  };

  return (
    <div class="account-form">
      <h1>Register</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <h3>Name</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
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
        <div class="errors">{errors.map(error => <h5>{error}</h5>)}</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
