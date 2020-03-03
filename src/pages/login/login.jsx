import React,{Component} from 'react'
import './login.less'
import logo from './images/logo.png'
import {Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Login extends Component{
    handleSubmit=(err,values)=>{
        // event.preventDefault();

        // const form = this.props.form
        // const values = form.getFieldsValue()
        console.log(err)
        console.log(values)
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
