import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });

      console.log(res.data);

      // save token
      localStorage.setItem("token", res.data.token);

      alert("Login successful");
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;