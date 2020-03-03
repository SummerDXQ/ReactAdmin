// APT request function
import ajax from './ajax'

// Login
export const reqLogin = (username,password)=>  ajax('/login',{username,password},'POST')
// Add user
export const reqUser = (user)=>  ajax('/manage/user/add',user,'POST')