import axios from '../../utils/axios'

//添加商品
export const Suadd= async (data)=>{
  console.log(data)
  let res = await axios.post('/cms/suManage/add',data)
  // console.log(res)
  return res
}
// 查询商品
export const SuList= async (data)=>{
  const{page,pageSize} = data
  let size = (page*pageSize)-pageSize
  let res = await axios.post('/cms/suManage/inquiry',{size:size,pageSize:pageSize})
  let list = res.data
  return list
}

//模糊查询
export const SuKeyword= async (data)=>{
  let res = await axios.post('/cms/suManage/keyword',{keyword:data})
  return res
}
// 删除商品
export const SuListdel= async (_id)=>{
  let res = await axios.post('/cms/suManage/del',{_id})
}
// 修改商品
export const SuUpdata= async (data)=>{
  let res = await axios.post('/cms/suManage/updata',data)
  console.log(res)
  return res
}