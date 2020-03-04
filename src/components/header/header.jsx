import React,{Component} from 'react'
import './header.less'
import {formateDate} from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
// import {reqWeather} from '../../api/index'
import {withRouter} from 'react-router-dom'
import menulist from '../../config/menuConfig'
// import Item from 'antd/lib/list/Item'
import { Modal } from 'antd';
import LinkButton from '../link-button/link-button'

class Header extends Component{
    state = {
        currentTime:formateDate(Date.now()),
        dayPictureUrl:'',
        weather:''
    }

    getTime=()=>{
        this.intervalID = setInterval(()=>{
            const currentTime = formateDate(Date.now())
            this.setState({
                currentTime
            })
        },1000)
    }

    getWeather = async ()=>{
        // const {}
    }

    getTitle = () => {
        const path = this.props.location.pathname
        let title
        menulist.forEach((item)=>{
            if(item.key===path){
                title = item.title
            }else if(item.children){
                const cItem = item.children.find(cItem=> path === cItem.key)
                if(cItem){
                    title = cItem.title
                }
            }
        })
        return title
    }

    logout = () =>{
        console.log('dianji')
        Modal.confirm({
            content:'Do you want to logout',
            onOk:()=>{
                // console.log("ok")
                storageUtils.removeUser()
                memoryUtils.username={}
                this.props.history.replace('/login')
            }
        })
    }

    componentWillMount(){
        this.getTime()
        // this.getWeather()
    }

    componentWillUnmount(){
        clearInterval(this.intervalID )
    }
    render(){
        const {currentTime} = this.state;
        const username = memoryUtils.user.username
        const title = this.getTitle()
        return(
            <div className="header">
                <div className="header-top">
                <span>Welcome,{username}</span>
                    {/* <a href="javaSript:" onClick={this.logout}>Logout</a> */}
                    <LinkButton onClick={this.logout}>Logout</LinkButton>
                </div>
                <div className="header-bottom">
                <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src="http://api.map.baidu.com/images/weather/day/qing.png" alt=""/>
                        <span>Windy</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)