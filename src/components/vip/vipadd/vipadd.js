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
        {/* 宠物照片 */}
        <Upload>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
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