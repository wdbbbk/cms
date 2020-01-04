import React from 'react'
import { Drawer, Button, Select } from 'antd';
import less from './drawer.module.less'
const { Option } = Select;
class DrawerBox extends React.Component{
  constructor(){
    super()
  }
  componentDidMount(){
    console.log(this)
  }
  render(){
    return(
        <Drawer 
          closable={false}
          width={600}
          title="修改会员信息" //标题
          visible={this.props.visible}
        >
          宠物名称:<input value={this.props.drawerdata.petname} onChange={(e)=>{
            // value = e.target.value
          }}/>
          宠物名称:<input />
          宠物名称:<input />
          宠物名称:<input />
          <Button onClick={()=>{
            this.props.changeDrawer()
          }}>取消</Button>
        </Drawer>
    )
  }
}
export default DrawerBox