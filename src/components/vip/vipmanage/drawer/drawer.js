import React from 'react'
import { Button , Card ,message} from 'antd';
import {changeVipMsg} from '../../../../api/manage/manage'
// import less from './drawer.module.less'
// const { Option } = Select;
class DrawerBox extends React.Component{
  constructor(props){
    super()
    this.state=props.drawerdata
  }
  componentWillReceiveProps(props){
    let{petname,petage,petsex,hostname,hostphone,petimg}=props.drawerdata
    this.setState({petname,petage,petsex,hostname,hostphone,petimg})
  }                                 
  render(){
    return(
        <Card>
          宠物名称:<input value={this.state.petname} onChange={(e)=>{
             this.setState({petname:e.target.value}) 
          }}/>
          宠物年龄:<input value={this.state.petage} onChange={(e)=>{
             this.setState({petage:e.target.value}) 
          }}/>
          宠物性别:<input value={this.state.petsex} onChange={(e)=>{
             this.setState({petsex:e.target.value}) 
          }}/>
          主人姓名
          :<input value={this.state.hostname} onChange={(e)=>{
             this.setState({hostname:e.target.value}) 
          }}/>
          主人联系方式:<input value={this.state.hostphone} onChange={(e)=>{
             this.setState({hostphone:e.target.value}) 
          }}/>
          宠物照片:<input value={this.state.petimg} onChange={(e)=>{
             this.setState({petimg:e.target.value}) 
          }}/>
          <Button onClick={()=>{
            changeVipMsg(this.state)
            .then((data)=>{
              if(data.data.err ===1 ){
                this.props.changeDrawer()
                // window.location.reload()  刷新页面搞
                message.success('会员信息修改成功');
                this.props.getdata()
              }
            })

          }}>修改</Button>
          <Button onClick={()=>{
            this.props.changeDrawer()
            console.log(this.state)
          }}>取消</Button>
        </Card>
    )
  }
}
export default  DrawerBox