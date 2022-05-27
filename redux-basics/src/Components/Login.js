import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

const Login = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const handleLoginClick = (e) => {
    e.preventDefault();
    console.log(name, location)
    dispatch(
      login({
        name,
        location,
      })
    );
  };
  return (
    <form onSubmit={handleLoginClick}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name"
        required
      />
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        placeholder="enter location"
        required
      />
      <button type="submit">Login</button>
      
    </form>

  );
};

export default Login;
