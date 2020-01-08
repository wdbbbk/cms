// {petSex,Nobaby,petName,petSpecies,petAge,petBreed,petHeight,petWeight,petRemarks}
import React from 'react'
import { Card , Form, Input, Button ,message,Radio } from 'antd';
import less from '../vipadd.module.less'
import {petAdd} from '../../../../api/manage/manage'
import UploadImg from '../../../upload/upload'
class PetAdd extends React.Component{
  constructor(){
    super()
    this.state = {
      iconLoading:false,
      petSex:'', //宠物性别
      Nobaby:'', //是否可以生育
      petreg:false, //是否可以提交
      _id:'',//用户的服务器里的_ID
      petimg:''//宠物照片
    };
  }
  // 性别单选款函数
  onChange = e => {
    this.setState({petSex: e.target.value});
  };
  //是否绝育函数
  onChangeNobaby = e =>{
    this.setState({Nobaby: e.target.value});
  }
  //给upload穿的方法 改变我的 petimg的
  callback=(imgbase64)=>{
    console.log('imgbase64',imgbase64)
    this.setState({petimg:imgbase64})
  }
  handleSubmit = e => {
    // e.preventDefault();
    this.props.form.validateFields((err, values) => {
      values.petSex = this.state.petSex
      values.Nobaby = this.state.Nobaby
      values._id = this.state._id
      values.petimg = this.state.petimg
      let {petSex,Nobaby,petName,petSpecies,petAge,petBreed,petHeight,petWeight,petimg}=values
      if(!petSex||!Nobaby||!petName||!petSpecies||!petAge||!petBreed||!petHeight||!petWeight||!petimg){
        message.error('请输入完整的宠物信息');
      }else{
        this.setState({iconLoading:true})
        console.log(values)
        //宠物信息的添加
        petAdd(values)
        .then((data)=>{
          this.setState({iconLoading:false})
          message.success('宠物信息添加成功');
        })
      }
    });
  };
  componentWillReceiveProps(props){
    this.setState({petreg:props.petreg,_id:props._id})
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    let {petreg} = this.state
    return(
        <Form>
          <Card className={less.addBoxRight}>
          <Button  className={less.header} >宠物信息</Button>
          <div className={less.vipName}>
            <span>*宠物名字:</span>{getFieldDecorator('petName', {})(
              <Input/>,
            )}
          </div>
          
          <div className={less.vipPhone}>
            <span>*宠物种类 :</span>{getFieldDecorator('petSpecies', {})(
              <Input />,
            )}
          </div>
          <div className={less.vipPhone}>
            <span>*宠物年龄 :</span>{getFieldDecorator('petAge', {})(
              <Input />,
            )}
          </div>
          <div className={less.vipSex}>
          <span>宠物性别 :</span> 
              <Radio.Group onChange={this.onChange} value={this.state.petSex}>
                <Radio value={'男'}>男</Radio>
                <Radio value={'女'}>女</Radio>
              </Radio.Group>
          </div>

          <div className={less.vipSite}>
            <span>宠物品种 :</span>
            {getFieldDecorator('petBreed', {})(
              <Input />,
            )}
          </div>
          <div className={less.payMoney}>
            <span className={less.firstspan}>宠物身高 :</span>{getFieldDecorator('petHeight', {})(
              <Input  addonAfter={'CM'}/>
            )}

          </div>
          <div className={less.giveMoney}>
            <span className={less.firstspan}>宠物体重 :</span>
            {getFieldDecorator('petWeight', {})(
              <Input  addonAfter={'KG'}/>
            )}
          </div>
          <div className={less.vipSex}>
          <span>是否绝育 :</span> 
              <Radio.Group onChange={this.onChangeNobaby} value={this.state.Nobaby}>
                <Radio value={'是'}>是</Radio>
                <Radio value={'否'}>否</Radio>
              </Radio.Group>
          </div>
          
          {/* 上传图片组件 */}
          <UploadImg callback={this.callback} ></UploadImg>
          <Button type="primary" 
            className={less.petAddSubmit}
            disabled={petreg?'':'disabled'} 
             // 不可提交
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
export default  Form.create({})(PetAdd) 