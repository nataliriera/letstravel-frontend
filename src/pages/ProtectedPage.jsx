import React from "react";



const ProtectedPage = (props) => {
  return (
    <>
    <div>
      <h1>Hello 👋 , <br/> {props.user.username}</h1>
      <h3>{props.user.job_title} <br/>{props.user.location}</h3>
    </div>
  <div>
  <h2>My Favorite Tech Skills:</h2>
    <h4>{props.user.skills}</h4>
    <h2>About Me:</h2>
    <h4>{props.user.about}</h4>
  </div>
 
  </>
  );
};

export default ProtectedPage;
