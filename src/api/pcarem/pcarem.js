import axios from '../../utils/axios'
import data from '../../components/management/Pcare/data'
//宠物照顾信息相关

// 查询
export const Pcaregetinfo = async (page=1,pageSize=3)=>{
  let res = await axios.post('/cms/petfostercare/getinfo',{page,pageSize})
  
  if(res.data.err!==0){
    throw res
   
  }
  console.log(res)
  return res


}