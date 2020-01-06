import React from 'react'
import { Button , Card ,message ,Upload ,Icon} from 'antd';
import {changeVipMsg} from '../../../../api/manage/manage'
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
  

class DrawerBox extends React.Component{
  
  constructor(props){
    super()
    this.state=props.drawerdata
    this.state.loading= false
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          petimg:imageUrl,
          loading: false,
        }),
      );
    }
  }
  componentWillReceiveProps(props){
    let{petname,petage,petsex,hostname,hostphone,petimg,_id}=props.drawerdata
    this.setState({petname,petage,petsex,hostname,hostphone,petimg,_id})
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
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>

          <Button onClick={()=>{
            console.log(this.state.petimg)
            changeVipMsg(this.state)
            .then((data)=>{
              if(data.data.err ===1 ){
                this.state({imageUrl:''})
                this.props.changeDrawer()
                message.success('会员信息修改成功');
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