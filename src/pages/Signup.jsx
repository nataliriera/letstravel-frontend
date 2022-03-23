import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import { TextField, Box, Button } from "@material-ui/core";


export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    job_title: "",
    skills: "",
    location: "",
    about: "",
    github: "",
    linked_in: ""

  });
  const { email, username, password, job_title, skills, location, about, linked_in, github } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      email,
      username,
      password,
      job_title,
      skills,
      location,
      about,
      linked_in,
      github
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
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
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
      <h1>Sign Up</h1>
    
      <form onSubmit={handleFormSubmission} className="auth__form">

        <TextField 
        className=""
        label="Email"
        // color="success"
          id="outlined-multiline-flexible"
          type="text"
          name="email"
          placeholder="* Example@email.com"
          value={email}
          onChange={handleInputChange}
         required
         variant="filled"

        />

        {/* <label htmlFor="input-username">Username</label> */}
        <TextField
          label="Username"
          id="outlined-multiline-flexible"
          type="text"
          name="username"
          placeholder="* Example: BestDevEver"
          value={username}
          onChange={handleInputChange}
          required
          variant="filled"
        />
        
        {/* <label htmlFor="input-username">Job Title</label> */}
        <TextField
          label="Job Title"
          id="outlined-multiline-flexible"
          type="text"
          name="job_title"
          placeholder="* What do you do?"
          value={job_title}
          onChange={handleInputChange}
          required
          variant="filled"
        />
          {/* <label htmlFor="input-username">Skills</label> */}
        <TextField
          label="Skills"
          id="outlined-multiline-flexible"
          type="text"
          name="skills"
          placeholder="* Flaunt those Skills!"
          value={skills}
          onChange={handleInputChange}
          required
          variant="filled"
        />
          {/* <label htmlFor="input-username">Location</label> */}
        <TextField
          label="Location"
          id="outlined-multiline-flexible"
          type="text"
          name="location"
          placeholder="Where are you coding from? (Optional)"
          value={location}
          onChange={handleInputChange}
          required
          variant="filled"
        />
          {/* <label htmlFor="input-username">About Me</label> */}
        <TextField
          label="About Me"
          id="outlined-multiline-flexible"
          type="text"
          name="about"
          multiline
          rows={4}
          placeholder="Tell us a little about you (Optional)"
          value={about}
          onChange={handleInputChange}
          required
          variant="filled"
        />
           {/* <label htmlFor="input-username">LinkedIn Username</label> */}
        <iTextField
          label="LinkedIn Username"
          id="outlined-multiline-flexible"
          type="text"
          name="linked_in"
          placeholder="* Your LinkedIn Username"
          value={linked_in}
          onChange={handleInputChange}
          required
          variant="filled"
        />
           {/* <label htmlFor="input-username">GitHub Username</label> */}
        <TextField
          label="GitHub Username"
          id="outlined-multiline-flexible"
          type="text"
          name="github"
          placeholder="* Your Github Username"
          value={github}
          onChange={handleInputChange}
          required
          variant="filled"
        />

        {/* <label htmlFor="input-password">Password</label> */}
        <TextField
          label="Password"
          id="outlined-multiline-flexible"
          type="password"
          name="password"
          placeholder="* Password must be 8 characters long"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
          variant="filled"
        />

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}
        <h5 style={{color:"#2E227C", marginTop:"5px"}}>* fields are required</h5>
        <Button variant="contained" type="submit" style={{backgroundColor:"#2E227C", color:"white"}}>
          Submit
        </Button>
      </form>
      </Box>
      </div>
        );
}
