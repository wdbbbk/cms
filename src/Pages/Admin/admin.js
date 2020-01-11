import React from 'react';
import less from './admin.module.less'
import { Layout , Icon } from 'antd';
import CusNav from '../../components/CustNav/cusNav'
import HeaderNav from '../../components/HeaderNav/headerNav'
import hc from '../../utils/hc'
import {withRouter} from 'react-router-dom'
const { Header, Sider, Content } = Layout;
class Admin extends React.Component {
  constructor(){
    super()
    this.state = {
      collapsed: false,
      logo:true
    };
  }
  
  toggle = () => {
    this.setState({
      logo:!this.state.logo,
      collapsed: !this.state.collapsed,
    });
  };
  // componentDidMount(){
  //   console.log(this.props)
  // }
  render() {
    return (
      <Layout className={less.fillBox}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          {/* logo */}
          {this.state.logo?<div className={less.logo}><img width='150px' height='32px' src='/logo.jpg'/></div>:<div className={less.logologo}><img width='30px' src='/logologo.jpg' /></div>}
          <CusNav></CusNav>
        </Sider>
        <Layout>
          <Header  className={less.Header} style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={less.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <HeaderNav></HeaderNav>
          </Header>
          <Content className={less.content}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
// export default hc(Admin);
export default Admin;
