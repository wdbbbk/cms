import React from 'react'
import less from './vipadd.module.less'
import {manageAdd} from '../../../api/manage/manage'
import { Card , Form, Input, Button ,message,DatePicker,Radio ,Select } from 'antd';
import UploadImg from '../../upload/upload'
//日历的函数
function onChange(date, dateString) {
  console.log(date, dateString);
}
//创建类组件
class Vipadd extends React.Component{
  constructor(){
    super()
    this.state = {
      iconLoading:false,
    };
  }
  // 性别单选款函数
  onChange = e => {
    this.setState({sexvalue: e.target.value});
  };
  // 支付下拉菜单的函数
   handleChange=(value)=> {
    this.setState({payStyle:value})
  }
  //给upload穿的方法 改变我的 petimg的
  changeMyImg=(imgbase64)=>{
    console.log('imgbase64',imgbase64)
    this.props.form.setFieldsValue({petimg:imgbase64})
  }
  handleSubmit = e => {
    // e.preventDefault();
    this.props.form.validateFields((err, values) => {
      this.setState({iconLoading:true})
      values.payStyle=this.state.payStyle
      values.sexvalue=this.state.sexvalue
      console.log('Received values of form: ', values);
      // let{vipName,vipPhone,vipSite,transactionTime,payMoney,giveMoney,remarks} = values
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
    const { Option } = Select;
    const { TextArea } = Input;
    return(
      <Form>
        <Card className={less.addBox}>
        <div className={less.vipName}>
          <span>*</span>姓名：{getFieldDecorator('vipName', {})(
            <Input/>,
          )}
        </div>
        
        <div className={less.vipPhone}>
          <span>*</span>手机号码：{getFieldDecorator('vipPhone', {})(
            <Input/>,
          )}
        </div>
        <div className={less.vipSex}>
         <span>性别:</span> 
            <Radio.Group onChange={this.onChange} value={this.state.sexvalue}>
              <Radio value={'男'}>男</Radio>
              <Radio value={'女'}>女</Radio>
            </Radio.Group>
        </div>
        <div className={less.vipSite}>
          联系地址:{getFieldDecorator('vipSite', {})(
            <Input />,
          )}
        </div>
        办理时间:{getFieldDecorator('transactionTime', {})(
          <DatePicker onChange={onChange} />
        )}
        
        充值金额:{getFieldDecorator('payMoney', {})(
          <Input prefix="￥" suffix="RMB" />
        )}
        赠送金额:{getFieldDecorator('giveMoney', {})(
          <Input prefix="￥" suffix="RMB" />
        )}
        支付方式:
          <Select defaultValue="微信" onChange={this.handleChange}>
            <Option key="现金">现金</Option>
            <Option key="微信">微信</Option>
            <Option key="支付宝">支付宝</Option>
            <Option key="POS机">POS机</Option>
          </Select>
        备注:{getFieldDecorator('remarks', {})(
          <TextArea rows={4} />
        )}
        {/* 上传图片组件 */}
        <UploadImg changeMyImg={this.changeMyImg}></UploadImg>
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