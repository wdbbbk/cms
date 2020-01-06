import axios from '../../utils/axios'

export const SpList= async (data)=>{
  const{spname,img,price,brand,inventory} = data
  let res = await axios.post('/cms/spManage/toy')
}