import {api} from './api'

export const getMembers = ()=>{
   return(
    api.get("/users")
    )
}