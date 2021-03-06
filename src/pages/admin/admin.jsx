import React,{Component} from 'react'
import {Redirect,Switch,Route} from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
import { Layout } from 'antd';
import Header from '../../components/header/header'
import LeftNav from '../../components/left-nav/left-nav'
import Home from '../../pages/home/home'
import Category from '../../pages/category/category'
import Product from '../../pages/product/product'
import Role from '../../pages/role/role'
import User from '../../pages/user/user'
import Bar from '../../pages/charts/bar'
import Line from '../../pages/charts/line'
import Pie from '../../pages/charts/pie'


const { Footer, Sider, Content } = Layout;

export default class Admin extends Component{
    render(){
        const user = memoryUtils.user
        if(!user || !user._id){
            return <Redirect to="/login"/>
        } 
        return(
            <Layout style={{height:"100%"}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content style={{margin:"20px",backgroundColor:"#fff"}}>
                        <Switch>
                            <Route path='/home' component={Home}></Route>
                            <Route path='/category' component={Category}/> 
                            <Route path='/product' component={Product}/> 
                            <Route path='/role' component={Role}/>
                            <Route path='/user' component={User}/>
                            <Route path='/charts/bar' component={Bar}/> 
                            <Route path='/charts/line' component={Line}/> 
                            <Route path='/charts/pie' component={Pie}/> 
                            <Redirect to='/home' />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:"center",color:"#ccc"}}>Recommend to use Chrome to get better experience</Footer>
                </Layout>
            </Layout>
        )
    }
}