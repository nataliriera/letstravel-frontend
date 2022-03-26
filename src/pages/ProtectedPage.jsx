import React, { useState } from "react";
import { editUser, uploadImage } from "../services/users";
import { GitHub, LinkedIn } from "@material-ui/icons";
import GitHubCalendar from "react-github-calendar";

const ProtectedPage = (props) => {
  const [isedit, setIsedit] = useState(false);
  const [form, setForm] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  const uploadPic = async (e) => {
    try {
      // const image = {doc:e.target}
      const formData = new FormData();

      formData.append("doc", e.target.files[0]);

      const { data } = await uploadImage(formData);
      console.log("test", data);
      setForm({ ...form, profile_pic: data.result.newPath.url });
    } catch (error) {
      console.log("error");
    }
  };

  function handleFormSubmission(event) {
    event.preventDefault();
    editUser(form)
      .then((res) => {
        props.authenticate(res.data.result);
        setIsedit(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  const colourTheme = {
    background: "red",
    text: "#BDC1D3",
    grade4: "#64dfdf",
    grade3: "#0baaaa",
    grade2: "#06cece",
    grade1: "#08cccc",
    grade0: "#e5e5e5",
  };
  return !isedit ? (
    <>
      <div className="member-app">
        <div class="container">
          <div class="user-box">
            <div class="card-header">
              <div class="img">
                <div class="inner-img">
                  <img
                    src={props.user.profile_pic}
                    alt=""
                    class="img-profile"
                  />
                </div>
              </div>
              <div class="desc">
                <h3>{props.user.username}</h3>
                <h5>{props.user.job_title}</h5>
                <h5>{props.user.location}</h5>
                <p>{props.user.about}</p>
              </div>

              <div class="buttons">
                <a
                  href={`https://github.com/${props.user.github}`}
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-bordered"
                >
                  <GitHub />
                </a>

                <a
                  href={`https://www.linkedin.com/in/${props.user.linked_in}`}
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-bordered"
                >
                  <LinkedIn />
                </a>
              </div>
            </div>

            <div class="card-footer">
              <h5>Skills</h5>
              <a href="#" class="tags">
                {props.user.skills}
              </a>
            </div>
            <h3>{props.user.username}'s GitHub Tracker</h3>
            <GitHubCalendar
              username={props.user.github}
              blockSize={15}
              blockMargin={5}
              theme={colourTheme}
              fontSize={16}
            />
          </div>
        </div>
      </div>

      <button onClick={() => setIsedit(true)} className="button__submit">
        Edit Profile
      </button>
    </>
  ) : (
    <>
      <h1>Edit User</h1>

      <form className="auth__form" onSubmit={handleFormSubmission}>
        <label htmlFor="input-profile_pic">Profile Picture</label>
        <input
          id="input-profile_pic"
          type="file"
          name="profile_pic"
          placeholder="Avatar"
          onChange={uploadPic}
          
        />

        <label htmlFor="input-username">Username</label>
        <input
          id="input-username"
          type="text"
          name="username"
          placeholder="Text"
          defaultValue={props.user.username}
          disabled
          required
        />

        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="text"
          name="email"
          placeholder="Text"
          defaultValue={props.user.email}
          disabled
          required
        />

        <label htmlFor="input-job_title">Job Title</label>
        <input
          id="input-job_title"
          type="text"
          name="job_title"
          placeholder="Text"
          defaultValue={props.user.job_title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-skills">Skills</label>
        <input
          id="input-skills"
          type="text"
          name="skills"
          placeholder="Text"
          defaultValue={props.user.skills}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-location">Location</label>
        <input
          id="input-location"
          type="text"
          name="location"
          placeholder="Text"
          defaultValue={props.user.location}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-about">About Me</label>
        <textarea
          id="input-about"
          type="text"
          name="about"
          placeholder="Text"
          defaultValue={props.user.about}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-linked_in">Linked In</label>
        <input
          id="input-linked_in"
          type="text"
          name="linked_in"
          placeholder="Text"
          defaultValue={props.user.linked_in}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-github">Git Hub</label>
        <input
          id="input-github"
          type="text"
          name="github"
          placeholder="Text"
          defaultValue={props.user.github}
          onChange={handleInputChange}
          required
        />

        <button onClick={() => setIsedit(true)} className="button__submit">
          Save Changes
        </button>
        <button onClick={() => setIsedit(false)} className="button__submit">
          Cancel Edit
        </button>
      </form>
    </>
  );
};

export default ProtectedPage;
