import React, { useState, useEffect } from 'react'
import  MemberItem  from '../Members/MemberItem'
import './memberitems.css'
import {getMembers} from '../../services/users'


const MemberList = () => {

    
    const [members, setMemberss] = useState([])
 
    useEffect(() => {
        const getData = async () => {
            const response = await getMembers()
            setMemberss(response.data.result)
            console.log(response)
        }

        getData()
    }, [])
    return (
        <div className='member-list-outer-div'>
        <div className="member-list">
            {members.map(member => {
                return(
                    <MemberItem 
                        username={member.username}
                        createdAt={member.createdAt}
                        job_title={member.job_title}
                        skills={member.skills}
                        location={member.location}
                        about={member.about}
                        linked_in={member.linked_in}
                        github={member.github}
                        profile_pic={member.profile_pic}
                        email={member.email}
                       
                    />
                )
            })}
            
        </div>
        <a href="#demo">
  <div className="box">
    <span></span>
    <span></span>
    <span></span>
  </div>
</a>
        </div>
    )
}

export default MemberList