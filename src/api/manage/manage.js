import axios from '../../utils/axios'
// 查询用户信息
export  const manageList = async (page, pageSize)=>{
  // 获取数据的区间
  let minNum = (page-1)*pageSize
  let data = await axios.post('/cms/Vipmanage/list',
    //携带的参数 1. 开始的索引  2. 每一页显示的条数 
    {minNum, pageSize}
  )
  return(data)
}
//会员添加
export  const manageAdd = async (data)=>{
  const{petname,petage,petsex,hostname,hostphone,petimg} = data
  let res = await axios.post('/cms/Vipmanage/add',
  {petname,petage,petsex,hostname,hostphone,petimg}
  )
  return(res)
}
//会员信息修改
export  const changeVipMsg = async (req)=>{
  let{petname,petage,petsex,hostname,hostphone,petimg,_id}=req
  let res = await axios.post('/cms/Vipmanage/changeVipMsg',
    {petname,petage,petsex,hostname,hostphone,petimg,_id}
  )
  return(res)
}
//删除会员
export  const delVip = async (_id)=>{
  let res = await axios.post('/cms/Vipmanage/delVip',
    {_id}
  )
  return(res)
}
