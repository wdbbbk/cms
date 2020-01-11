import React,{Fragment} from 'react'
import less from './vipadd.module.less'
import {manageAdd} from '../../../api/manage/manage'
import { Card , Form, Input, Button ,message,DatePicker,Radio ,Select  } from 'antd';
import PetAdd from './petadd/petadd'
import AddSuccess from './addSuccess/addSuccess';
import locale from 'antd/es/date-picker/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

//创建类组件
class Vipadd extends React.Component{
  constructor(){
    super()
    this.state = {
      show:false,//控制成功显示隐藏
      iconLoading:false, //转圈圈
      petreg:false, //宠物提交按钮是否可以点
      _id:''
    };
  }
  //改变添加成功显示的组件
  changeSuccessShow=(value)=>{
    console.log(value)
    this.setState({show:value})
  }
  // 性别单选款函数
  onChange = e => {
    this.setState({sexvalue: e.target.value});
  };
  // 支付下拉菜单的函数
   handleChange=(value)=> {
    this.setState({payStyle:value})
  }
  //日历的函数
  onChangeTime=(date, dateString)=> {
    this.setState({newTransactionTime:dateString})
  }
  //给upload穿的方法 改变我的 petimg的
  callback=(imgbase64)=>{
    console.log('imgbase64',imgbase64)
    this.props.form.setFieldsValue({petimg:imgbase64})
  }
  handleSubmit = e => {
    // e.preventDefault();
    this.props.form.validateFields((err, values) => {
      values.payStyle=this.state.payStyle
      values.sexvalue=this.state.sexvalue
      values.newTransactionTime=this.state.newTransactionTime
      values.timestamp = new Date().getTime()
      let {vipName,vipPhone,transactionTime,payMoney,giveMoney} = values
      // 
      if(!vipName||!vipPhone||!transactionTime||!payMoney||!giveMoney){
        message.error('请输入完整的信息');
        return
      }else{
        // values.newTransactionTime=this.state.newTransactionTime._d
        // let{vipName,vipPhone,vipSite,transactionTime,payMoney,giveMoney,remarks} = values
        manageAdd(values)
        .then((data)=>{
          this.setState({iconLoading:true})
          console.log(data)
          if(data.data.err){
            message.success('会员信息添加成功');
            this.setState({iconLoading:false,petreg:true,_id:data.data._id})
          }else{
            this.setState({iconLoading:false})
            message.error('添加失败,此手机号会员已经注册,请核对信息');
          }
        })
      }
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const { TextArea } = Input;
    return(
      <Card className={less.vipAddBox}>
        <Card className={less.addBox}>
          <Button className={less.header}>会员信息</Button>
          <div className={less.vipName}>
            <span>*姓名 :</span>{getFieldDecorator('vipName', {})(
              <Input/>,
            )}
          </div>
          <div className={less.vipPhone}>
            <span>*手机号码 :</span>{getFieldDecorator('vipPhone', {})(
              <Input/>,
            )}
          </div>
          <div className={less.vipSex}>
          <span>性别 :</span> 
              <Radio.Group onChange={this.onChange} value={this.state.sexvalue}>
                <Radio value={'男'}>男</Radio>
                <Radio value={'女'}>女</Radio>
              </Radio.Group>
          </div>
          <div className={less.vipSite}>
            <span>联系地址 :</span>
            {getFieldDecorator('vipSite', {})(
              <Input />,
            )}
          </div>
          <div className={less.transactionTime}>
            <span className={less.firstspan}>办理时间 :</span>
            {getFieldDecorator('transactionTime', {})(
              <DatePicker locale={locale} onChange={this.onChangeTime} />
<<<<<<< HEAD
=======

>>>>>>> 8f42c6f80ab2a7e260d990ae44ff253b0897d425
            )}
          </div>
          <div className={less.payMoney}>
            <span className={less.firstspan}>充值金额 :</span>{getFieldDecorator('payMoney', {})(
              <Input prefix="￥" addonAfter={'元'}/>
            )}
          </div>
          <div className={less.giveMoney}>
            <span className={less.firstspan}>赠送金额 :</span>
            {getFieldDecorator('giveMoney', {})(
              <Input prefix="￥" addonAfter={'元'}/>
            )}
          </div>
          <div className={less.payStyle}>
            <span>支付方式 :</span>
            <Select defaultValue="微信" onChange={this.handleChange} style={{width:'100px'}}>
              <Option key="现金">现金</Option>
              <Option key="微信">微信</Option>
              <Option key="支付宝">支付宝</Option>
              <Option key="POS机">POS机</Option>
            </Select>
          </div>
          <div className={less.remarks}>
            <span>备注 :</span>
            {getFieldDecorator('remarks', {})(
              <TextArea rows={2} />
            )}
          </div>
          {/* 上传图片组件 */}
          {/* <UploadImg changeMyImg={this.changeMyImg}></UploadImg> */}
          <Button type="primary" 
          disabled={!this.state.petreg?'':'disabled'} 
            className={less.vipAddbutton}
            loading={this.state.iconLoading}
            onClick={()=>{
              this.handleSubmit()
            }}>
              提交
          </Button>
        </Card>
        <PetAdd petreg={this.state.petreg}  _id={this.state._id} changeSuccessShow={this.changeSuccessShow}></PetAdd>
        <AddSuccess changeSuccessShow={this.changeSuccessShow} show={this.state.show}></AddSuccess>
      </Card>
    )
  }
}
export default Form.create({})(Vipadd) 