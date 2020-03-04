import React,{Component} from 'react'
import {Card,Table,Button,message,Modal} from 'antd'
import {PlusOutlined,ArrowRightOutlined} from '@ant-design/icons';
import LinkButton from '../../components/link-button/link-button'
import {reqCategory,reqUpdateCategory,reqAddCategory} from '../../api/index'
import AddForm from './addForm'
import UpdateFrom from './updateForm'
import PropTypes from 'prop-types'

export default class Category extends Component{

    static propTypes = {
        categoryName
    }
    state={
        categories:[],
        loading:false,
        subCategories:[],
        parentId:'0',
        parentName:'',
        showStatus:0,   //0:both invisible,1:add visible,2:update visible
    }

    initColumns = () => {
        this.columns = [
            {
              title: 'Category Name',    
              dataIndex: 'name',
            },
            {
              title: 'Action',
              width:300, 
              render: (category) => (
                  <span>
                      <LinkButton onClick={()=>this.showUpdate(category)}>Edit</LinkButton>
                      {this.state.parentId==='0'? <LinkButton onClick={()=>this.showSubCategories(category)}>Sub-Category</LinkButton>:null}
                  </span>
              )
            },
          ];
    }

    getCategories = async () => {
        // console.log('getCategories')
        this.setState({loading:true})
        const {parentId} = this.state
        const result = await reqCategory(parentId)
        this.setState({loading:false})
        if(result.status === 0){
            const categories = result.data
            if(parentId==='0'){
                this.setState({
                    categories
                })
            }else{
                this.setState({
                    subCategories:categories
                })
            }
        }else{
            message.error('Request category fail')
        }
        
    }

    showSubCategories = (category) =>{
        this.setState({
            parentId:category._id,
            parentName:category.name
        },()=>{this.getCategories()})
        
    }

    showCategories=()=>{
        this.setState({
            parentId:'0',
            parentName:'',
            subCategories:[]
        })

    }

    handleCancel=()=>{
        this.setState({
            showStatus:0
        })
    }

    showAdd = ()=>{
        this.setState({
            showStatus:1
        })
    }

    addCategory =()=>{
        console.log("addCategory")
    }
    updateCategory = async ()=>{
        console.log("updateCategory")
        this.setState({
            showStatus:0 
        })
        // update
        const categoryId = this.category._id
        // const categoryName = 
        const result = await reqUpdateCategory({categoryId,categoryName})
        if(result.status===0){
            this.getCategories()
        }
        // render again
    }
    showUpdate=(category)=>{
        console.log(category)
        this.category = category
        this.setState({
            showStatus:2
        })
    }
    // prepare data for the first render
    componentWillMount(){
        this.initColumns()
    }

    componentDidMount(){
        this.getCategories()
    }

    render(){
        const {categories,loading,subCategories,parentId,parentName,showStatus} = this.state
        const category = this.category || {}
        // console.log('render')
        // console.dir(category)
        // console.log(category.name)
        const title = parentId === '0'? 'First level category list':(
            <span>
                <LinkButton onClick={this.showCategories}>First level category list</LinkButton>
                <ArrowRightOutlined style={{marginRight:'5px'}}/>
                <span>{parentName}</span>
            </span>
        )
        const extra = (
            <Button type="primary" onClick={this.showAdd}>
                <PlusOutlined />
                Add
            </Button>
        )

        return(
            <Card title={title} extra={extra}>
                <Table 
                    dataSource={parentId==='0'? categories:subCategories} 
                    columns={this.columns} 
                    bordered
                    rowKey="_id" 
                    pagination={{defaultCurrent:5,showQuickJumper:true}}
                    loading={loading}
                />
                <Modal
                    title="Add Category"
                    visible={showStatus===1}
                    onOk={this.addCategory}
                    onCancel={this.handleCancel}
                    >
                    <AddForm/>
                </Modal>
                <Modal
                    title="Update Category"
                    visible={showStatus===2}
                    onOk={this.updateCategory}
                    onCancel={this.handleCancel}
                    >
                    <UpdateFrom   
                        categoryName={category.name}
                        setForm = {(form)=>{this.form=form}}
                    />
                </Modal>
            </Card>
        )
    }
}