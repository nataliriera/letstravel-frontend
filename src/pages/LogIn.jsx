import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import { TextField, Box, Button } from "@material-ui/core";
import "./auth.css";



export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div className="signupBox">

<Box

      component="form"
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
      
      <h1>Log In</h1>
      <form onSubmit={handleFormSubmission} className="signup__form">
        <TextField
          label="Username"
          id="outlined-multiline-flexible"
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleInputChange}
          required
        />

        <TextField
          label="Password"
          id="outlined-multiline-flexible"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}
<div className="login-button">
<Button variant="contained" type="submit" style={{backgroundColor:"#2E227C", color:"white"}}>
          Sign In
        </Button>
        </div>
      </form>
      </Box>
    </div>
  );
}
