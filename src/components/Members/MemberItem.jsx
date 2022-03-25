import './memberitems.css'
import * as React from 'react';
import {GitHub, LinkedIn, Email} from '@material-ui/icons'
import GitHubCalendar from 'react-github-calendar';

const MemberItem = ({username, about, job_title, skills, location, linked_in, github, profile_pic, email}) => {
  const colourTheme = {
    background: 'red',
    text: '#BDC1D3',
    grade4: '#64dfdf',
    grade3: '#0baaaa',
    grade2: '#06cece',
    grade1: '#08cccc',
    grade0: '#e5e5e5',
  };
  return (
    <div className="member-app">


    <div class="container">
  <div class="user-box">
    <div class="card-header">
      
      <div class="img">
        <div class="inner-img">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaDkQdhg6yji1yDOvvgoizD_Z97VaoJ3hKg&usqp=CAU' alt="" class="img-profile"/>
        </div>
      </div>
      <div class="desc">
        <h3>{username}</h3>
        <h5>{job_title}</h5>
        <h5>{location}</h5>
        <p>{about}</p>
      </div>
      
      <div class="buttons">


        <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer" class="btn btn-bordered">
          <GitHub/>
        </a>

        <a href= {`https://www.linkedin.com/in/${linked_in}`} target="_blank" rel="noreferrer" class="btn btn-bordered">
          <LinkedIn/>
        </a>
        <a href= {`mailto:${email}`} target="_blank" rel="noreferrer" class="btn btn-bordered">
          <Email/>
        </a>
      </div>
    </div>
    
    <div class="card-footer">
      <h5>Skills</h5>
      <a href="#" class="tags">{skills}</a>
     
    </div>
    <h3 >
        {username}'s GitHub Tracker
        </h3>
        <GitHubCalendar
        username={github}
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
  </div>
  </div>  
</div>
        
  )
}

export default MemberItem


