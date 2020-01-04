import axios from '../../utils/axios'
// 查询用户信息
export  const manageList = async ()=>{
  let data = await axios.get('/cms/Vipmanage/list')
  return(data.data.data)
}
//会员添加
export  const manageAdd = async (data)=>{
  const{petname,petage,petsex,hostname,hostphone,petimg} = data
  let res = await axios.get('/cms/Vipmanage/add',
    {
      params: {petname,petage,petsex,hostname,hostphone,petimg}
    }
  )
  return(res)
}
