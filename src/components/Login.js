import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="center container" style={{maxWidth:'500px'}}>
      <h3>Please Login!!</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-field">
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn blue">
          LogIn
        </button>
      </form>
    </div>
  );
}

export default Login;
