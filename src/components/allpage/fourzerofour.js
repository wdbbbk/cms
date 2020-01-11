import React from 'react'
import { Result, Button } from 'antd';
import {withRouter} from 'react-router-dom'
class Fourzerofour extends React.Component{
  render(){
    return(
      <Result
        status="404"
        title="404"
        subTitle="对不起,你搜索的页面不存在!"
        extra={<Button onClick={()=>{
          this.props.history.push('/admin/home')
        }} type="primary">返回首页</Button>}
      />
    )
  }
}
export default withRouter(Fourzerofour)