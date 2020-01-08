import React,{Fragment} from 'react'
import { Result, Button ,Card} from 'antd';
import less from './addSuccess.module.less'
import {withRouter} from 'react-router-dom'
class AddSuccess extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  componentDidMount(){
    // console.log(this.props.show)
  }
  render(){
    return(
      <Fragment>
        {this.props.show?<Card className={less.AddSuccess}>
          <Result className={less.Result}
            status="success"
            title="成功添加会员信息与宠物信息!"
            subTitle={`恭喜! xxx 先生已经成为本店第 xxx 位会员，请保持更高的服务态度与产品质量！`}
            extra={[
              <Button type="primary" key="console"
              onClick={()=>{
                this.props.history.push('/admin/home')
              }}
              >
              去网首页
              </Button>,
              <Button key="buy" 
                onClick={()=>{
                  this.props.history.push('/admin/vip/vipmanage')
                }}
              >返回管理界面</Button>,
            ]}
          />
        </Card>:''}
      </Fragment>

    )
  }
}
export default  withRouter(AddSuccess) 