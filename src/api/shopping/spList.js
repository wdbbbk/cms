import axios from '../../utils/axios'

//添加商品
export const Spadd= async (data)=>{
  console.log(data)
  let res = await axios.post('/cms/spManage/add',data)
  // console.log(res)
  return res
}
// 查询商品
export const SpList= async (data)=>{
  const{page,pageSize} = data
  let size = (page*pageSize)-pageSize
  let res = await axios.post('/cms/spManage/inquiry',{size:size,pageSize:pageSize})
  let list = res.data
  return list
}

//模糊查询
export const SpKeyword= async (data)=>{
  let res = await axios.post('/cms/spManage/keyword',{keyword:data})
  return res
}
// 删除商品
export const SpListdel= async (_id)=>{
  let res = await axios.post('/cms/spManage/del',{_id})
}
// 修改商品
export const SpUpdata= async (data)=>{
  let res = await axios.post('/cms/spManage/updata',data)
  console.log(res)
  return res
}