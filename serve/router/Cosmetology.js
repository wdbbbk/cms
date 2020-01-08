const express = require('express')

const router = express.Router()

const Cosmetology = require('../db/model/Cosmetology')

router.post('/cosmetologyadd',(req,res)=>{
  const {shop,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Uppershelf,Productnumber} =req.body
  console.log(shop,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Uppershelf,Productnumber)
  Cosmetology.insertMany({shop,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Uppershelf,Productnumber})
  .then((data)=>{
    console.log(data)
    res.send({err:1,msg:'添加成功'})


  })

})

/**
 * @api {post}  http://localhost:3030/cosmetology/cosmetologyadd
 * @apiName  petfostercare/pcareadd                 
 * @apiGroup  宠物寄养信息添加                  
 * 
 * 
 * @apiParam {String} shop  店家名称
 * @apiParam {String} bigclass 大类别 
 * @apiParam {String} smallclass  小类别
 * @apiParam {String} name  宠物名字
 * @apiParam {Number}  barcode 条形码
 * @apiParam {Number}  price 条形码
 * @apiParam {Number}  sallprice 销售价
 * @apiParam {String}  cleandifficulty 清洗难度
 * @apiParam {Number}  Productnumber 产品编号
 * @apiParam {Boolean} Uppershelf 是否上架
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */ 


//查找数据接口
router.post('/cosmetologysearch',(req,res)=>{
  Cosmetology.find()
  .then((data)=>{
    res.send({data})

  })


})

//删除接口
router.post('/cosmetologydel',(req,res)=>{
  const {_id} = req.body
  console.log(_id)
  Cosmetology.deleteMany({_id})
  .then((data)=>{

      console.log(data)
      res.send({err:0,msg:'删除成功'})

  })
})


//更新接口
router.post('/cosmetologyupdate',(req,res)=>{
  const {_id,shop,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Productnumber} = req.body
  Cosmetology.update({_id},{shop,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Productnumber})
  .then((data)=>{
      console.log(data)
      res.send({err:0,msg:'修改成功'})


  })

})











module.exports = router