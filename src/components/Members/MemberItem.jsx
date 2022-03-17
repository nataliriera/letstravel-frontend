import './memberitems.css'
import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';

const MemberItem = ({username, createdAt
}) => {
  return (
    <div className="member-app">
          
        <Card className='member-item' sx={{ maxWidth: 345 }} style={{backgroundColor:'#1E1E1E'}}>
        
        
        <CardContent className='member-content'>
        
        <Typography gutterBottom variant="h4" component="div">
        {username}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
        Joined: {createdAt}
        </Typography>
    
        
      </CardContent>
      
        
    
    </Card>
        </div>
  )
}

export default MemberItem