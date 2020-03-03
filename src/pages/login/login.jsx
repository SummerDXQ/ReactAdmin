import React,{Component} from 'react'
import './login.less'
import logo from './images/logo.png'
import {Form, Input, Button,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import {Redirect} from 'react-router-dom'

class Login extends Component{
    handleSubmit= async (values)=>{
        const {username,password} = values
        const result = await reqLogin(username,password)
        // const result = response.data
        if(result.status===0){
            message.success('Login Successfully')
            // console.log(result.data.username)
            const user = result.data
            memoryUtils.user = user
            storageUtils.saveUser(user)
            // no need to go back to login
            this.props.history.replace('/')
        }else{
            message.error(result.msg)
        }
    }
    // validatePwd =(rule,value,callback)=>{
    //     if(!value){
    //         callback('Password is required!')
    //     }else if(value.length<4){
    //         callback('No less that 4!')
    //     }else if(value.length>12){
    //         callback('No greater than 12!')
    //     }else if(/^[a-zA-Z0-9_]+$/.test(value)){
    //         callback('Must be number,letter or _')
    //     }else{
    //         callback()
    //     }
    // }
    render(){
        // const {getFieldDecorator} = this.props.form
        const user = memoryUtils.user
        if(user && user._id){
            return <Redirect to="/"/>
        }
        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt=""/>
                    <h1>Back Stage Management System</h1>
                </header>
                <section className="login-content">
                    <h2>User Login</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.handleSubmit}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, whitespace:true, message: 'Please input your Username!' },
                                { min: 4, message: 'No less that 4!' },
                                { max: 12, message: 'No greater than 12!' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: 'Must be number,letter or _' },
                            ]}
                        >
                            <Input 
                                prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="Username" 
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, whitespace:true, message: 'Please input your Password!' },
                                { min: 4, message: 'No less that 4!' },
                                { max: 12, message: 'No greater than 12!' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: 'Must be number,letter or _' },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

// Login = Form.create()(Login);
export default Login
