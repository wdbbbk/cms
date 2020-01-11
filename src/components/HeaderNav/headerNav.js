import React from 'react'
import less from './headerNav.module.less'
import { Menu, Dropdown, Icon , Avatar} from 'antd';
import {Link} from 'react-router-dom'
import { Modal, Button } from 'antd';
const user = [
  {key:'个人中心',icon:'user',path:'/admin/user/center'},
  {key:'个人设置',icon:'setting',path:'/admin/user/set'},
  {key:'退出登录',icon:'logout',path:'/login'},
]
const menu = (
  <Menu className={less.Menu}>
    {user.map((item,index)=>{
      return (
        <Menu.Item key={index}>
          <Link to={item.path}>
            <div target="_blank" rel="noopener noreferrer" >
              <Icon type={item.icon} className={less.Icon} /> 
              {item['key']} 
            </div>
          </Link>
        </Menu.Item>
      )
    })}
  </Menu>
)
class HeaderNav extends React.Component{
  render(){
    return(
      <Dropdown  overlay={menu} className={less['ant-dropdown-link']}>
        <div>
          <Avatar src="/Avatar.png" />
          <span className={less.text}>Domnayo</span> 
        </div>
      </Dropdown>
    )
  }
}
export default HeaderNav