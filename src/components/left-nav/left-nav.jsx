import React,{Component} from 'react'
import './left-nav.less'
import {Link,withRouter} from 'react-router-dom'
import logo from '../../assets/iamges/logo.png'
import { Menu } from 'antd';
import {
//   AppstoreOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
  PieChartOutlined,
//   DesktopOutlined,
//   InboxOutlined,
  MailOutlined,
} from '@ant-design/icons';
import menuList from '../../config/menuConfig'

const { SubMenu } = Menu;
class LeftNav extends Component{
    getMenuNodes=(menuList)=>{
        return menuList.map(item=>{
            if(!item.children){
                return(
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <PieChartOutlined />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }else{
                const path = this.props.location.pathname
                const cItem = item.children.find(cItem=>cItem.key===path)
                if(cItem){
                    this.openKey = item.key
                }
                return(
                    <SubMenu
                        key={item.key}
                        title={
                        <span>
                            <MailOutlined />
                            <span>{item.title}</span>
                        </span>
                        }
                >
                    {this.getMenuNodes(item.children)}
                </SubMenu>
                )
            }
        })
    }
    componentWillMount(){
        this.menuNodes = this.getMenuNodes(menuList)
    }

    render(){
        const path = this.props.location.pathname
        const openKey = this.openKey
        return(
            <div className="left-nav">
                <Link to="/" className="left-nav-header">
                    <img src={logo} alt=""/>
                    <h1>Back Stage</h1>
                </Link>         
                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                    //   inlineCollapsed={this.state.collapsed}
                >
                {
                    this.menuNodes
                }
                </Menu>
            </div>
            
        )
    }
}

export default withRouter(LeftNav)