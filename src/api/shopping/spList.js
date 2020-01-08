import axios from '../../utils/axios'

//添加商品
export const Spadd= async (data)=>{
  console.log(data)
  // const{spname,img,price,brand,inventory} = data
  let res = await axios.post('/cms/spManage/add',data)
  // console.log(res)
  // let list = res.data.data
  // console.log(list)
  // return list
}
// 查询商品
export const SpList= async (data)=>{
  const{page,pageSize} = data
  let size = (page*pageSize)-pageSize
  let res = await axios.post('/cms/spManage/inquiry',{size:size,pageSize:pageSize})
  // console.log(res.data)
  let list = res.data
  // console.log(list)
  return list
}
// 删除商品
export const SpListdel= async (_id)=>{
  console.log(_id)
  let res = await axios.post('/cms/spManage/del',{_id})
  console.log(res)
}
// 修改商品
export const SpUpdata= async (data)=>{
  // const{spname,img,price,brand,inventory} = data
  let res = await axios.post('/cms/spManage/updata',data)
  // console.log(res)
  // let list = res.data.data
  // console.log(list)
  // return list
}