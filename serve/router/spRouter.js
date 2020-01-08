// 引入 exprsess 脚手架   接口
const express = require('express')
// 加载路由
const router = express.Router()
// 用于商品增删改查
const spManage = require('../db/model/spmanage') 
/**
 * @api {get} http://localhost:3030/spmanage/add
 * @apiName  spmanage/add                   
 * @apiGroup  商品信息添加                  
 *        
 * @apiParam {String} spname  商品名称
 * @apiParam {String} img  图片地址
 * @apiParam {Number} price  商品价格
 * @apiParam {String} brand  品牌
 * @apiParam {String} inventory  库存
 * 
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */  
// 添加商品 接口
router.post('/add',(req,res)=>{
  const {spname,img,price,brand,inventory} = req.body
  console.log(spname,img,price,brand,inventory)
  spManage.insertMany({spname,img,price,brand,inventory})
  .then((data)=>{
    console.log(data)
    res.send({err:1,msg:'添加成功'})
  })
})

/**
 * @api {get} http://localhost:3030/spmanage/inquiry
 * @apiName  spmanage/inquiry                   
 * @apiGroup  查询商品信息                  
 *        
 * 
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */  
// 查找商品 接口
router.post('/inquiry',(req,res)=>{
  // const {spname,img,price,brand,inventory} = req.body
  // console.log(spname,img,price,brand,inventory)
  spManage.find()
  .then((data)=>{
    res.send({data})
  })
})


/**
 * @api {post} http://localhost:3030/spmanage/del
 * @apiName  spmanage/del                   
 * @apiGroup  删除商品信息                  
 *        
 * @apiParam {String} id  商品 Id
 * 
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */  
// 删除商品 接口
router.post('/del',(req,res)=>{
  const {_id} = req.body
  console.log(_id)
  spManage.deleteMany({_id})
  .then((data)=>{
    console.log(data)
    res.send({err:1,msg:'删除成功'})
  })
})

/**
 * @api {post} http://localhost:3030/spmanage/updata
 * @apiName  spmanage/updata                   
 * @apiGroup  修改商品信息                  
 *        
 * @apiParam {String} id  商品 Id
 * @apiParam {String} spname  商品名称
 * @apiParam {String} img  商品图片
 * @apiParam {String} price  商品价格
 * @apiParam {String} brand  商品品牌
 * @apiParam {String} inventory  商品库存
 * 
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */ 
// 修改商品 接口
router.post('/updata',(req,res)=>{
  const {_id,spname,img,price,brand,inventory} = req.body
  console.log(spname,img,price,brand,inventory)
  spManage.update({_id},{spname,img,price,brand,inventory})
  .then((data)=>{
    console.log(data)
    res.send({err:1,msg:'修改成功'})
  })
})
module.exports = router