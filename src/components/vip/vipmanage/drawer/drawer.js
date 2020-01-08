import React from 'react'
import { Button , Card ,message ,Upload ,Icon,Input} from 'antd';
import {changeVipMsg} from '../../../../api/manage/manage'
import UploadImg from '../../../upload/upload'
import less from './drawer.module.less'
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

class DrawerBox extends React.Component{
  constructor(props){
    super()
    this.state=props.drawerdata
    this.state.loading= false
  }
  componentWillReceiveProps(props){
    let{vipName,petHeight,petWeight,vipSite,vipPhone,petimg,petName,Nobaby,_id}=props.drawerdata
    this.setState({vipName,petHeight,petWeight,vipSite,vipPhone,petimg,petName,Nobaby,_id})
  }        
  callback=(base64)=>{
    this.setState({petimg:base64})
  }                         
  render(){
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return(
      <Card className={less.cardBox}>
          会员名称:<Input value={this.state.vipName}  onChange={(e)=>{
             this.setState({vipName:e.target.value}) 
          }}/>
          手机号码:<Input value={this.state.vipPhone}  onChange={(e)=>{
             this.setState({vipPhone:e.target.value}) 
          }}/>
          地址信息:<Input value={this.state.vipSite} onChange={(e)=>{
             this.setState({vipSite:e.target.value}) 
          }}/>
          宠物名称:<Input value={this.state.petName} onChange={(e)=>{
             this.setState({petName:e.target.value}) 
          }}/>
          宠物身高:<Input value={this.state.petHeight} onChange={(e)=>{
             this.setState({petHeight:e.target.value}) 
          }}/>
          宠物体重:<Input value={this.state.petWeight} onChange={(e)=>{
             this.setState({petWeight:e.target.value}) 
          }}/>
          是否绝育:<Input value={this.state.Nobaby} onChange={(e)=>{
             this.setState({Nobaby:e.target.value}) 
          }}/>
          <UploadImg callback={this.callback}></UploadImg>
          <Button onClick={()=>{
            changeVipMsg(this.state)
            .then((data)=>{
              if(data.data.err ===1 ){
                this.props.changeDrawer()
                message.success('宠物信息修改成功');
                this.props.getdata(this.props.page,this.props.pageSize)
              }
            })
          }}>修改</Button>
          <Button onClick={()=>{
            this.props.changeDrawer()
          }}>取消</Button>
        </Card>
    )
  }
}
export default  DrawerBox