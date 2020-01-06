// 引入 exprsess 脚手架
const express = require('express')
// 加载路由
const router = express.Router()
// 用于商品增删改查
const spManage = require('../db/model/spmanage')   
// 商品列表 接口
router.post('/toy',(req,res)=>{
  const {spname,img,price,brand,inventory} = req.body
  spManage.insertMany({spname,img,price,brand,inventory})
  .then((data)=>{
    console.log(data)
    res.send({err:1,msg:'添加成功'})
  })
})
