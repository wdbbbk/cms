import React from 'react'
import {Input ,Card,Select,Button} from 'antd';
import {withRouter} from 'react-router-dom'
import less from './query.module.less'
import {queryVip} from '../../../../api/manage/manage'
// import { set } from 'mongoose';
class HaederQuery extends React.Component{
  constructor(){
    super()
    this.state={
      arrow:false,
      sortcol:'timestamp'
    }
  }
  // 排序下拉菜单的函数
  handleChange=(sortcol)=> {
    //排序网络请求
    this.setState({sortcol})
    let arrow = this.state.arrow?'1':'-1'
    this.props.getdata(1,5,arrow,sortcol)
  }

  // 搜索框函数
  queryfn=(value)=>{
    this.props.loadingfn(true) //让loading开起来
    //发起网络请求
    queryVip(value)
    .then(data=>{
      this.props.queryUpdata(data.data.data)
    })

  }
  render(){
    const { Search } = Input;
    const { Option } = Select;
    return(
      <Card className={less.queryBox}>
        <Search className={less.query}
          placeholder="手机号、姓名、宠物姓名"
          onSearch={value =>{
            this.queryfn(value)
          }}
          style={{ width: 200 }}
        />
      <div className={less.sort}>
        <span className={less.titleText}>排序方式 :</span>
        <Select defaultValue="请选择" onChange={this.handleChange} style={{width:'100px'}}>
          <Option value="vipGrade" >等级</Option>
          <Option value="payMoney">余额</Option>
          <Option value="vipID" >会员编号</Option>
          <Option value="timestamp">注册日期</Option>
          <Option value="消费">消费金额</Option>
        </Select>
      </div>
      {/* 正序倒序按钮 */}
      <Button shape="circle" 
        className={less.arrow} 
        icon={this.state.arrow?'arrow-up':'arrow-down'}
        onClick={()=>{
          this.setState({arrow:!this.state.arrow})
          let arrow = this.state.arrow?'-1':'1' 
          // 因为setState是异步的 让arrow为真的时候其实我们已经操作过改成false了 我们让他倒序
          this.props.getdata(1,5,arrow,this.state.sortcol)
        }}
      ></Button>
      <div className={less.vipGarde}>
        <span className={less.titleText}>会员级别 :</span>
        <Select defaultValue="请选择" onChange={this.vipGardeChange} >
          <Option value="至尊卡" >至尊卡</Option>
          <Option value="钻石卡">钻石卡</Option>
          <Option value="白金卡">白金卡</Option>
          <Option value="黄金卡">黄金卡</Option>
          <Option value="银卡">银卡</Option>
        </Select>
      </div>
          <Button 
          className={less.add}
          type="primary" shape="round" icon="plus" 
          onClick={()=>{
            this.props.history.push('/admin/vip/vipadd')
          }}>新增会员</Button>
      </Card>
    )
  }
}
export default withRouter(HaederQuery) 