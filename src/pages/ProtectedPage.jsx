import React, {useState} from "react";
import {editUser, uploadImage} from "../services/users"


const ProtectedPage = (props) => {
const [isedit, setIsedit] = useState(false)
const [form, setForm] = useState({});

function handleInputChange(event) {
  const { name, value } = event.target;
  return setForm({ ...form, [name]: value });
}

const uploadPic = async (e)=>{
  try{
    const image = {doc:e.target}
    const formData = new FormData(); 

    formData.append("doc", e.target.files[0])
    
  
    const {data} = await uploadImage(formData)
    console.log("test", data)
    setForm({...form, profile_pic:data.result.newPath.url})
  }catch(error){
      console.log("error")
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  editUser(form).then((res) => {

    props.authenticate(res.data.result);
    setIsedit(false)
  }).catch(error => {
     console.log("error",error)
  })
}

  return (
    !isedit ?
    <>
    <div>
      <img src={props.user.profile_pic} width="100" height="100"/>
      <h1>Hello 👋 , <br/> {props.user.username}</h1>
      <h3>{props.user.job_title} <br/>{props.user.location}</h3>
    </div>
  <div>
  <h2>My Favorite Tech Skills:</h2>
    <h4>{props.user.skills}</h4>
    <h2>About Me:</h2>
    <h4>{props.user.about}</h4>
  </div>
  <button onClick={()=> setIsedit(true)} className="button__submit">Edit Profile</button>
 
  </>
  :
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
          required
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




        


  <button onClick={()=> setIsedit(true)} className="button__submit">Save Changes</button>
  <button onClick={()=> setIsedit(false)} className="button__submit">Cancel Edit</button>

       
      </form>

  </>
  );
};

export default ProtectedPage;
