import React,{Component} from 'react' 
import { Card,Pagination,Button,Drawer,Table,Popconfirm, message,Spin} from 'antd';

class Pcaremadd extends Component{
  constructor(){
    super()
    this.state={
      img:null
    }

  }


  upload=()=>{
    let file =this.refs.file.files[0]
    console.log(file)
    let readObj= new FileReader()
    readObj.onload=()=>{
      console.log('文件读取完毕',readObj.result)
      message.success('图片上传成功',1)
      this.setState({img:readObj.result})
  }
    readObj.readAsDataURL(file)
}
submit(){
    let name=this.refs.name.value
    let img=this.state.img
    //发起ajax请求
    



}

  render(){
    return (
      <Card title='宠物信息添加'>
        Shop:<input type="text"/>
        <br/>
        name:<input type="text"/>
        <br/>
        bigclass:<input type="text"/>
        <br/>
        smallclass:<input type="text"/>
        <br/>
        Address:<input type="text"/>
        <br/>
        price:<input type="text"/>
        <br/>
        sallprice:<input type="text"/>
        <br/>
        barcode:<input type="text"/>
        <br/>
        cleandifficulty:<input type="text"/>
        <br/>
        Productnumber:<input type="text"/>
        <br/>
        imgpath:<input type="file"  ref="file"/>
        <br/>
        <button onClick={this.upload}>上传</button>
        <button onClick={this.submit}>submit</button>

      </Card>


    )

  }


}

export default Pcaremadd