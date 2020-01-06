import React from 'react'
import { Button , Card ,message} from 'antd';
import {changeVipMsg} from '../../../../api/manage/manage'
// import less from './drawer.module.less'
class DrawerBox extends React.Component{
  constructor(props){
    super()
    this.state=props.drawerdata
  }
  componentWillReceiveProps(props){
    let{petname,petage,petsex,hostname,hostphone,petimg,_id}=props.drawerdata
    this.setState({petname,petage,petsex,hostname,hostphone,petimg,_id})
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
          宠物照片:<img ref='petimg' width='80' src={this.state.petimg}/>
          <input type='file' ref='petimginput'/>

          <Button onClick={()=>{
            let reader = new FileReader()
            reader.readAsDataURL(this.refs.petimginput.files[0])
            reader.onload = ()=>{
              // 读到base64以后放到input框里
              this.refs.petimg.src=reader.result
              this.state.petimg = reader.result
              message.success('图片上传成功')
            }
          }}>上传</Button>

          <Button onClick={()=>{
            let reader = new FileReader()
            reader.readAsDataURL(this.refs.petimginput.files[0])
            reader.onload = ()=>{
              this.state.petimg=reader.result
              console.log(reader.result)
              changeVipMsg(this.state)
              .then((data)=>{
                if(data.data.err ===1 ){
                  this.props.changeDrawer()
                  message.success('会员信息修改成功');
                  this.props.getdata(this.props.page,this.props.pageSize)
                }
              })
            }

          }}>修改</Button>
          <Button onClick={()=>{
            this.props.changeDrawer()
          }}>取消</Button>
        </Card>
    )
  }
}
export default  DrawerBox