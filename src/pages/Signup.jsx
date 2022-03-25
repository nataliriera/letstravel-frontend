import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";


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
    linked_in: "",
  

  });
  const { email, username, password, job_title, skills, location, about, linked_in, github} = form;
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
      github,
    
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
    <div>
      <h1>Let's Get Started  🎉 </h1>
      <form onSubmit={handleFormSubmission} className="auth__form">
        <label htmlFor="input-username">Username</label>
        <input
          id="input-username"
          type="text"
          name="username"
          placeholder="* Example: BestDevEver"
          value={username}
          onChange={handleInputChange}
          required
        />
           <label htmlFor="input-email">Email</label>
         <input
          id="input-email"
          type="text"
          name="email"
          placeholder="* Example@email.com"
          value={email}
          onChange={handleInputChange}
          required
        />

<label htmlFor="input-job_title">Job Title</label>
         <input
          id="input-job_title"
          type="text"
          name="job_title"
          placeholder="* What do you do?"
          value={job_title}
          onChange={handleInputChange}
          required
        />

<label htmlFor="input-skills">Skills</label>
         <input
          id="input-skills"
          type="text"
          name="skills"
          placeholder="* Flaunt those Skills!"
          value={skills}
          onChange={handleInputChange}
          required
        />

<label htmlFor="input-location">Location</label>
         <input
          id="input-location"
          type="text"
          name="location"
          placeholder="Where are you coding from? (Optional)"
          value={location}
          onChange={handleInputChange}
          required
        />

<label htmlFor="input-about">About Me</label>
         <textarea
          id="input-about"
          type="text"
          name="about"
          placeholder="Tell us a little about you (Optional)"
          value={about}
          onChange={handleInputChange}
          required
        />

<label htmlFor="input-linked_in">Linked In</label>
         <input
          id="input-linked_in"
          type="text"
          name="linked_in"
          placeholder="* Your LinkedIn Username"
          value={linked_in}
          onChange={handleInputChange}
          required
        />

<label htmlFor="input-github">Git Hub</label>
         <input
          id="input-github"
          type="text"
          name="github"
          placeholder="* Your Github Username"
          value={github}
          onChange={handleInputChange}
          required
        />




        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="* Password must be 8 characters long"
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

        <button className="button__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}