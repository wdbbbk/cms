import axios from '../../utils/axios'
// 查询商品
export const SpList= async (data)=>{
  // const{spname,img,price,brand,inventory} = data
  let res = await axios.post('/cms/spManage/inquiry')
  // console.log(res)
  let list = res.data.data
  console.log(list)
  return list
}
// 删除商品
export const SpListdel= async (_id)=>{
  console.log(_id)
  let res = await axios.post('/cms/spManage/del',{_id})
  console.log(res)
}