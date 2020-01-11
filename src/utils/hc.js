import React,{Fragment} from 'react'
import { Modal } from 'antd';
export default (OldComponent)=>{
  class NewComponent extends React.Component{
    info(){
      Modal.info({
        title: '登录失效',
        content: (
          <div>
            <p>您的登录信息已经失效请重新登录!</p>
          </div>
        ),
        onOk:()=>{
          this.props.history.push('/login')
        },
      });
    }
    componentDidMount(){
      let token =  localStorage.getItem('token')
      if(!token){
        this.info()
      }
    }
    render(){
      return(
        <Fragment>
          <OldComponent></OldComponent> 
        </Fragment>
      )
    }
  }
  return NewComponent 
}