import './memberitems.css'
import * as React from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import {GitHub, LinkedIn} from '@material-ui/icons'
import GitHubCalendar from 'react-github-calendar';

const MemberItem = ({username, createdAt, about, job_title, skills, location, linked_in, github}) => {
  const colourTheme = {
    background: 'transparent',
    text: '#e5e5e5',
    grade4: '#64dfdf',
    grade3: '#0baaaa',
    grade2: '#06cece',
    grade1: '#08cccc',
    grade0: '#e5e5e5',
  };
  return (
    <div className="member-app">
          
        <Card className='member-item' sx={{ maxWidth: 345 }} style={{backgroundColor:'#1E1E1E'}}>
        
        
        <CardContent className='member-content'>
        
        <Typography gutterBottom variant="h4" component="div">
        {username}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
        {job_title}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
        {location}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
        {skills}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
        {about}
        </Typography>
       
        <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer">
          <GitHub/>
        </a>

        <a href= {`https://www.linkedin.com/in/${linked_in}`} target="_blank" rel="noreferrer">
          <LinkedIn/>
        </a>
    
        <Typography gutterBottom variant="h4" component="div">
        Joined: {createdAt}
        </Typography>

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
        
      </CardContent>
      
        
    
    </Card>
        </div>
  )
}

export default MemberItem