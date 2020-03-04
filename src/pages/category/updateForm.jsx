import React,{Component} from 'react'
import {Form,Input} from 'antd'

const Item = Form.Item

export default class UpdateFrom extends Component{
    render(){
        const {categoryName} = this.props;
        return(
            <Form>
                <Item
                     rules={[{ required: true, message: 'Category name is required!'}]}
                >
                    <Input placeholder='Please input category name' value={categoryName}/>
                </Item>
            </Form>
        )
    }
}