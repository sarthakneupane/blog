import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/register", {
        name,
        email,
        password,
      });

      console.log(res.data);
      alert("Registered successfully");
    } catch (err) {
      console.error(err);
      alert("Error registering");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;