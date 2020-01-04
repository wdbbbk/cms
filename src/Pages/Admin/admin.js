import React from 'react';
import less from './admin.module.less'
import { Layout , Icon } from 'antd';
import CusNav from '../../components/CustNav/cusNav'
import HeaderNav from '../../components/HeaderNav/headerNav'
const { Header, Sider, Content } = Layout;
class Admin extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout className={less.fillBox}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={less.logo} />
          <CusNav></CusNav>
        </Sider>
        <Layout>
          <Header  className={less.Header} style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={less.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            {/* <h1 className={less.headline}>方长君的后宫后台管理系统</h1> */}
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
export default Admin;
