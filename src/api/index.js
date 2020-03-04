// APT request function
import ajax from './ajax'
// import jsonp from 'jsonp'
// import { message } from 'antd'
// import axios from 'axios'

// Login
export const reqLogin = (username,password)=>  ajax('/login',{username,password},'POST')
// Add user
export const reqUser = (user)=>  ajax('/manage/user/add',user,'POST')

// jsonp, weather
// export const reqWeather = (city)=>{
//     return new Promise((resolve,reject)=>{
//         const url = `http://api.weatherapi.com/v1/current.json?key=4f1daaa213ba487e87892150200303&q=${city}`
//         // jsonp(url,{param: 'callback'},(error, response)=>{
//         //     console.log('jsonp')
//         //     console.log(response)
//         //     // if(!error && data.status === 'success'){
//         //     //     const {dayPictureUrl,weather} = data.results[0].weather_data[0]
//         //     //     resolve({dayPictureUrl,weather})
//         //     // }else{
//         //     //     message.error('Require weather information failed')
//         //     // }
//         // })
        
//     })
// }

// 4f1daaa213ba487e87892150200303
// reqWeather('sydney')


export const reqAddUser = (user) => ajax('/manage/user/add',user,'POST')

export const reqCategory = (parentId) => ajax('/manage/category/list',{parentId})

export const reqAddCategory = (categoryName,parentId) =>ajax('/manage/category/add',{categoryName,parentId},'POST')

export const reqUpdateCategory = ({categoryId,categoryName}) => ajax('/manage/category/update',{categoryId,categoryName},'POST')

