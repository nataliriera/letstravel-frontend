import React, { useState, useEffect } from 'react'
import axios from 'axios'
import  MemberItem  from '../Members/MemberItem'
import './memberitems.css'
import {getMembers} from '../../services/users'
//FGThqlNvNNnQyiXvLLEQRecyzSgAa1J1v9f97ioAPxFxElZ2WtoWT1J3fDRfM2Et
const MemberList = () => {

    
    const [members, setMemberss] = useState([])
   // https://data.mongodb-api.com/app/data-putub/endpoint/data/beta
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
                        createdAt={member.createdAt
                        }

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