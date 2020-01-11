// 存放和食品 数据操作的相关信息 数据库的操作
const PetFostcareModel= require('../../serve/db/model/Petfostercare')
async function  add(shop,img,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Productnumber){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
   let result =await PetFostcareModel.insertMany({shop,img,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Productnumber})
   console.log(result)
}
async function get(page,pageSize){
  // 获取总的食品数据数组
  let allFoods =await PetFostcareModel.find()
  // 获取视食品数据 总数量
  let allCount =allFoods.length 
  let foods = await PetFostcareModel.find().skip((page-1)*pageSize).limit(pageSize)
  return  {foods,allCount}
}

// 分类查询+分页
async function getByType(shop,page,pageSize){
  let allFoods=await PetFostcareModel.find({shop})
  let allCount=allFoods.length 
  let  foods=await PetFostcareModel.find({shop}).skip((page-1)*pageSize).limit(pageSize)
  return {foods,allCount}
}
// 关键字查询+分页
async function getByKw(kw,page,pageSize){
 let regex=new RegExp(kw) //查询关键字的正则 
 let  allFoods=await PetFostcareModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]})
 let  allCount = allFoods.length
 let  foods=await PetFostcareModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
 return {foods,allCount}
}

// 删除
async function del(_id){
  let result = await  PetFostcareModel.deleteOne({_id})
  return result
}

// 修改
async function  update(shop,img,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Productnumber){
  
  let result  = await PetFostcareModel.updateOne({_id},{shop,img,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Productnumber})
   console.log(result)
   return  result
}
module.exports={add,get,getByType,getByKw,del,update}