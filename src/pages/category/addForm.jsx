import React,{Component} from 'react'
import {
    Form,
    Select,
    Input
} from 'antd'

const Item = Form.Item
const Option = Select.Option

export default class AddFrom extends Component{
    render(){
        return(
            <Form>
                <Item>
                    <Select defaultValue="0">
                        <Option value='0'>First Level Category</Option>
                        <Option value='1'>Computer</Option>
                        <Option value='2'>Book</Option>
                    </Select>
                </Item>
                <Item
                     rules={[{ required: true, message: 'Category name is required!'}]}
                >
                    <Input placeholder='Please input category name'/>
                </Item>
            </Form>
        )
    }
}