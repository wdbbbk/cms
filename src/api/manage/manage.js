import axios from '../../utils/axios'
// 查询用户信息
export  const manageList = async (page, pageSize)=>{
  // 获取数据的区间
  let minNum = 'total'
  if(page !== 'total'){
    minNum = (page-1)*pageSize
  }
  console.log(minNum)
  let data = await axios.get('/cms/Vipmanage/list',
    {
      params:{minNum, pageSize}
    }
  )
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
//会员信息修改
export  const changeVipMsg = async (req)=>{
  let{petname,petage,petsex,hostname,hostphone,petimg,_id}=req
  let res = await axios.get('/cms/Vipmanage/changeVipMsg',
    {
      params: {petname,petage,petsex,hostname,hostphone,petimg,_id}
    }
  )
  return(res)
}
//删除会员
export  const delVip = async (_id)=>{
  let res = await axios.get('/cms/Vipmanage/delVip',
    {params: {_id}}
  )
  return(res)
}
