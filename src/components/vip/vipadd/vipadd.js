import React from 'react'
import less from './vipadd.module.less'
import {manageAdd} from '../../../api/manage/manage'
import { Card , Form, Input, Button ,Icon ,Upload ,message} from 'antd';

class Vipadd extends React.Component{
  constructor(){
    super()
    this.state = {
      iconLoading:false,
    };
  }
  handleSubmit = e => {
    // e.preventDefault();
    this.props.form.validateFields((err, values) => {
      this.setState({iconLoading:true})
      console.log('Received values of form: ', values);
      manageAdd(values)
      .then((data)=>{
        if(data.data.err){
          message.success('会员信息添加成功');
          this.setState({iconLoading:false})
        }
      })
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <Form>
        <Card className={less.addBox}>
        宠物名字:{getFieldDecorator('petname', {})(
            <Input/>,
          )}
        宠物年龄:{getFieldDecorator('petage', {})(
            <Input/>,
          )}
        宠物性别:{getFieldDecorator('petsex', {})(
            <Input/>,
          )}
        主人名字:{getFieldDecorator('hostname', {
           rules: [{required: true, message: 'Please input your username!' }],
        })(
            <Input/>,
          )}
        联系方式:{getFieldDecorator('hostphone', {})(
            <Input/>,
          )}
        {getFieldDecorator('petimg', {})(
            <Input className={less.petimg}/>
        )}

        {/* 宠物照片 */}
        {/* <Upload ref='petimg'>
          <Button onClick={()=>{
            console.log(this.refs.petimg)
          }}>
            <Icon type="upload" />
            上传宠物照片
          </Button>
        </Upload> */}
        <input type='file' ref='petimg'/>
        <img ref='showpetimg' src=''/>
        <Button onClick={()=>{
          let reader = new FileReader()
          reader.readAsDataURL(this.refs.petimg.files[0])
          reader.onload = ()=>{
            // 读到base64以后放到input框里
            this.props.form.setFieldsValue({petimg:reader.result})
            message.success('图片上传成功')
            this.refs.showpetimg.src=reader.result
          }
        }}>上传</Button>
        <Button type="primary" 
          loading={this.state.iconLoading}
          onClick={()=>{
            this.handleSubmit()
          }}>
            提交
        </Button>
        </Card>
      </Form>
    )
  }
}
export default Form.create({})(Vipadd) 