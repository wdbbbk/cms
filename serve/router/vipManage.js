const express = require('express')
const router = express.Router()
const VipManageModel = require('../db/model/Vipmanage')   // 用于增删改查
router.get('/add',(req,res)=>{
  const{petname,petage,petsex,hostname,hostphone,petimg} = req.query
  console.log(petname,petage,petsex,hostname,hostphone,petimg)
  VipManageModel.insertMany({petname,petage,petsex,hostname,hostphone,petimg})
  res.send({err:1,msg:'添加成功'})
})
router.get('/list',(req,res)=>{
  VipManageModel.find()
  .then((data)=>{
    console.log(data)
    res.send({err:1,msg:'查询成功',data:data})
  })
})
module.exports = router



