//引入express 脚手架
const express =require('express')
//加载路由
const router = express.Router()
//用于商品的增删改查
// const Petfoster = require('../db/model/Petfostercare')
const Petfoster = require('../control/pcaremcontrol')

//添加宠物美容信息接口 
router.post('/pcareadd',(req,res)=>{
    const {shop,img,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Productnumber} = req.body
    console.log(shop,img,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Productnumber)
    Petfoster.insertMany({shop,img,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Productnumber})
    .then((data)=>{
        console.log(data)
        res.send({err:1,msg:'添加成功'})

    })
})


router.post('/getinfo',(req,res)=>{
    let page=Number(req.body.page)||1
    let pageSize=Number(req.body.pageSize)||2
    Petfoster.get(page,pageSize)
    .then((data)=>{
      res.send({err:0,msg:'查询ok',list:data})
    })
    .catch((err)=>{
      console.log(err)
      res.send({err:-1,msg:'查询失败'})})
  })





/**
 * @api {post}  http://localhost:3030/petfostercare/pcareadd
 * @apiName  petfostercare/pcareadd                 
 * @apiGroup  宠物寄养信息添加                  
 *  
 * @apiParam {String} img 图片地址        
 * @apiParam {String} shop  店家名称
 * @apiParam {String} bigclass 大类别 
 * @apiParam {String} smallclass  小类别
 * @apiParam {String} name  宠物名字
 * @apiParam {Number}  barcode 条形码
 * @apiParam {Number}  price 条形码
 * @apiParam {Number}  sallprice 销售价
 * @apiParam {String}  cleandifficulty 清洗难度
 * @apiParam {Number}  Productnumber 产品编号
 * 
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */ 


 router.post('/search',(req,res)=>{
    Petfoster.find()
        .then((data)=>{

            res.send({data})
        })
    

 })

/**
 * @api {post}  http://localhost:3030/petfostercare/search
 * @apiName  petfostercare/search               
 * @apiGroup  查询商品信息                  
 *        
 * @apiParam {String} id  商品 Id
 * 
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */ 


 router.post('/del',(req,res)=>{
    const {_id} = req.body
    console.log(_id)
    Petfoster.deleteMany({_id})
    .then((data)=>{

        console.log(data)
        res.send({err:0,msg:'删除成功'})

    })
 })

 /**
 * @api {post}  http://localhost:3030/petfostercare/del
 * @apiName  petfostercare/del              
 * @apiGroup  删除商品信息                  
 *        
 * @apiParam {String} id  商品 Id
 * 
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */ 

router.post('/update',(req,res)=>{
    const {_id,shop,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Productnumber} = req.body
    Petfoster.update({_id},{shop,bigclass,smallclass,name,barcode,price,sallprice,cleandifficulty,Productnumber})
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:'修改成功'})


    })

})


/**
 * @api {post}  http://localhost:3030/petfostercare/pcareadd
 * @apiName  petfostercare/pcareadd                 
 * @apiGroup  宠物寄养信息添加                  
 * 
 * @apiParam {Number}  id  宠物 id  
 * @apiParam {String} shop  店家名称
 * @apiParam {String} bigclass 大类别 
 * @apiParam {String} smallclass  小类别
 * @apiParam {String} name  宠物名字
 * @apiParam {Number}  barcode 条形码
 * @apiParam {Number}  price 条形码
 * @apiParam {Number}  sallprice 销售价
 * @apiParam {String}  cleandifficulty 清洗难度
 * @apiParam {Number}  Productnumber 产品编号
 * 
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */ 





module.exports = router
