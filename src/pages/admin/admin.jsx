import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'

export default class Admin extends Component{
    
    render(){
        console.log("Admin")
        console.log(memoryUtils.user)
        const user = memoryUtils.user
        console.log(user)
        console.log(!user._id)
        if(!user || !user._id){
            return <Redirect to="/login"/>
        } 
        return(
        <div>Hello {user.username}</div>
        )
    }
}