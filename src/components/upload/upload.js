import React from 'react'
import { Upload, Icon, message } from 'antd';

// 转换base64的函数
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
// 限制文件大小的函数
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
class UploadImg extends React.Component{
  constructor(props){
    super()
    this.state={
      loading: false,
      imageUrl:props.imageUrl
    }
  }
  componentWillReceiveProps(props){
    let{imageUrl}=props
    this.setState({imageUrl})
  }   
  // 改变时间触发的函数
  handleChange = info => {
    console.log('到我了')
    if (info.file.status === 'uploading') {
      
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl =>{
        this.setState({
          imageUrl,
          loading: false,
        })
        this.props.callback(imageUrl)
      }
      );
    }
  };
  render(){
    const { imageUrl } = this.state;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return(
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
    )
  }
}
export default UploadImg