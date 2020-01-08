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
  let{vipName,vipPhone,vipSite,newTransactionTime,payMoney,giveMoney,remarks} = data
  let timeArr = (newTransactionTime+'0').split(' ')
  let hour = timeArr[4].split(':')
  newTransactionTime = `${timeArr[3]} ${timeArr[1]} ${hour[0]-8} ${hour[1]} ${timeArr[0]}`
  let res = await axios.post('/cms/Vipmanage/add',
    {vipName,vipPhone,vipSite,newTransactionTime,payMoney,giveMoney,remarks}
  )
  return(res)
}
// 会员宠物信息添加
export  const petAdd = async (data)=>{
  let{_id,petSex,Nobaby,petName,petSpecies,petAge,petBreed,petHeight,petWeight,petRemarks,petimg} = data
  let res = await axios.post('/cms/Vipmanage/petAdd',
    {_id,petSex,Nobaby,petName,petSpecies,petAge,petBreed,petHeight,petWeight,petRemarks,petimg}
  )
  return(res)
}
//会员信息修改
export const changeVipMsg = async (req)=>{
  let{vipName,petHeight,petWeight,vipSite,vipPhone,petimg,petName,Nobaby,_id}=req
  let res = await axios.post('/cms/Vipmanage/changeVipMsg',
    {vipName,petHeight,petWeight,vipSite,vipPhone,petimg,petName,Nobaby,_id}
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


