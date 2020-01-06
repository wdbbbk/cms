import React from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;
let arr = [
  {
    name:'首页',
    id:'0',
    path:'/admin/home',
    Icon:'home'
  },
  {
    name:'会员',
    id:'1',
    path:'/admin/vip',
    Icon:'user',
    children:[
      {
        name:'会员添加',
        id:'1_1',
        path:'/admin/vip/vipadd',
        Icon:'user-add',
      },
      {
        name:'会员管理',
        id:'1_0',
        path:'/admin/vip/vipmanage',
        Icon:'solution',
      },
      {
        name:'会员提醒',
        id:'1_2',
        path:'/admin/vip/vipremind',
        Icon:'dashboard',
      },
      {
        name:'积分兑换',
        id:'1_3',
        path:'/admin/vip/vipexchange',
        Icon:'transaction',
      }
    ]
  },
  {
    name:'服务',
    id:'2',
    path:'/admin/serve',
    Icon:'coffee',
    children:[
      {
        name:'宠物寄养',
        id:'2_0',
        path:'/admin/serve/petfoster',
        Icon:'database',
      },
      {
        name:'宠物驱虫',
        id:'2_1',
        path:'/admin/serve/petwipeworm',
        Icon:'database',
      },
      {
        name:'宠物疫苗',
        id:'2_2',
        path:'/admin/serve/petvaccine',
        Icon:'database',
      },
    ]
  },
  {
    name:'商品',
    id:'3',
    Icon:'coffee',
    children:[
      {
        name:'日用家居',
        id:'3_0',
        path:'/admin/shopping/toy',
        Icon:'database',
      },
      {
        name:'犬猫零食',
        id:'3_1',
        path:'/admin/shopping/snacks',
        Icon:'database',
      },
      {
        name:'犬猫主粮',
        id:'3_2',
        path:'/admin/shopping/food',
        Icon:'database',
      },
    ]
  },
  {
    name:'店员',
    id:'4',
    path:'/admin/goods',
    Icon:'coffee',
    children:[
      {
        name:'日用家居',
        id:'4_0',
        path:'/admin/serve/petfoster',
        Icon:'database',
      },
      {
        name:'犬猫零食',
        id:'4_1',
        path:'/admin/serve/petwipeworm',
        Icon:'database',
      },
      {
        name:'犬猫主粮',
        id:'4_2',
        path:'/admin/serve/petvaccine',
        Icon:'database',
      },
    ]
  },
]

class CusNav extends React.Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    theme: 'dark',
    openKeys: ['sub1'],
  };
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  rendermenuItem(arr){
    return(arr.map((item,index)=>{
      if(item.children){        
        return(
          <SubMenu
            key={item.id}
            title={
              <span>
                <Icon type={item.Icon}/>
                <span>{item.name}</span>
              </span>
            }
          >
            {this.rendermenuItem(item.children)}
          </SubMenu>
        )
      }else{
        return(
          <Menu.Item key={item.id} > 
            <Link to={item.path}>
              <Icon type={item.Icon} />
              <span>{item.name}</span>
            </Link>
          </Menu.Item>
        )
      }
    }))    
  }

  render() {
    return (
      <Menu
        mode="inline"
        // openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        theme={'dark'}
        // inlineCollapsed={true}
      >  
        {this.rendermenuItem(arr)}
      </Menu>
    );
  }
}

export default CusNav;
