import axios from '../utils/axios'
// 登录接口
export const UserLogin = async (userName,passWord)=>{
  let data = await axios.get('/cms/user/login',{params:{userName:userName,passWord:passWord}})
  return(data.data)
}
