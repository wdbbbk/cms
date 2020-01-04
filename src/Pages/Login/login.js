import React from 'react';
import less from './login.module.less'
import { Form, Icon, Input, Button, Checkbox,Card} from 'antd';
import { message } from 'antd';
import {UserLogin} from '../../api/user'
class Login extends React.Component {
  componentDidMount(){
    console.log(this.props.history)
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //账号密码输入了 可以发起网络请求了
        UserLogin(values.username,values.password)
        .then((data)=>{
          if(data.err){
            console.log(data)
            message.loading('登录成功',.5,()=>{
              window.location.href = '/admin/home'
              localStorage.setItem('token',data.token)
            });
          }else{ 
            message.error('账号密码不匹配',[1],()=>{
              this.props.form.setFieldsValue({password:''})
            })
          }
        })
        // console.log('Received values of form: ', values);
      }else{
        message.error('你输入的账号密码有误呀!')
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card  className={less['login-form']}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: '请输入账号!' },
              { max: 20, message: '最大长度为20位!' },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            // rules: [{min:6 , message: '密码最少六位' }],
          })(
            <Input 
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' ,}} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住密码</Checkbox>)}
          <a className={less["login-form-forgot"]} href="/admin/home">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" onClick={this.handleSubmit} className={less['login-form-button']}>
            登 录
          </Button>
          <a href="/admin/home">现在注册!</a>
        </Form.Item>
      </Card>
    );
  }
}
export default Form.create({})(Login) ;
