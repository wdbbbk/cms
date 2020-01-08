import React from 'react'
import {Input ,Card,Select,Button} from 'antd';
import {withRouter} from 'react-router-dom'
class HaederQuery extends React.Component{
  // 支付下拉菜单的函数
  handleChange=(value)=> {
  }
  render(){
    const { Search } = Input;
    const { Option } = Select;
    return(
      <Card>
        <Search
          placeholder="手机号、姓名、宠物姓名"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <span>排序方式 :</span>
          <Select defaultValue="请选择" onChange={this.handleChange} >
            <Option key="编号" >编号</Option>
            <Option key="余额">余额</Option>
            <Option key="办卡日期">办卡日期</Option>
            <Option key="POS机">POS机</Option>
          </Select>
        <span>会员级别 :</span>
          <Select defaultValue="请选择" onChange={this.handleChange} >
            <Option key="编号" >至尊卡</Option>
            <Option key="余额">钻石卡</Option>
            <Option key="办卡日期">白金卡</Option>
            <Option key="POS机">黄金卡</Option>
            <Option key="POS机">银卡</Option>
          </Select>
          <Button onClick={()=>{
            this.props.history.push('/admin/vip/vipadd')
          }}>新增会员</Button>
      </Card>
    )
  }
}
export default withRouter(HaederQuery) 