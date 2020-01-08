const express = require('express')

const router = express.Router()

const Fostermanagement = require('../db/model/Fostermanagement')


//添加宠物美容信息接口 
router.post('/fosteradd',(req,res)=>{
  const {shop,peoplename,telephpne,petnane,Coatcolor,room,weight,sex,age,fosternum,food} = req.body
  console.log(shop,peoplename,telephpne,petnane,Coatcolor,room,weight,sex,age,fosternum,food)
  Fostermanagement.insertMany({shop,peoplename,telephpne,petnane,Coatcolor,room,weight,sex,age,fosternum,food})
  .then((data)=>{
      console.log(data)
      res.send({err:1,msg:'添加成功'})

  })
})

/**
* @api {post}  http://localhost:3030/fostermanagement/fosteradd
* @apiName  petfostercare/pcareadd                 
* @apiGroup  宠物寄养管理信息添加                  
*        
* @apiParam {String} shop  店家名称
* @apiParam {String} peoplename 主人名字
* @apiParam {Number} telephpne  电话
* @apiParam {String} petnane  宠物名字
* @apiParam {String}  class 品种
* @apiParam {String}  Coatcolor 毛色
* @apiParam {String}  room 房间大小
* @apiParam {Number}  weight 体重
* @apiParam {String}  sex 性别
* @apiParam {Number}  age 年龄
* @apiParam {Number} fosternum 寄养数
* @apiParam {Boolean} food  是否给粮
*
* @apiSuccess {Number} err 状态码. 
* @apiSuccess {String} msg 信息提示.
*/ 


router.post('/fostersearch',(req,res)=>{
  Fostermanagement.find()
      .then((data)=>{

          res.send({data})
      })
  

})

/**
* @api {post}  http://localhost:3030/fostermanagement/fostersearch
* @apiName  petfostercare/search               
* @apiGroup  查询商品信息                  
*        
* @apiParam {String} id  商品 Id
* 
* @apiSuccess {Number} err 状态码. 
* @apiSuccess {String} msg 信息提示.
*/ 


router.post('/fosterdel',(req,res)=>{
  const {_id} = req.body
  console.log(_id)
  Fostermanagement.deleteMany({_id})
  .then((data)=>{

      console.log(data)
      res.send({err:0,msg:'删除成功'})

  })
})

/**
* @api {post}  http://localhost:3030/fostermanagement/fosterdel
* @apiName  petfostercare/del              
* @apiGroup  删除商品信息                  
*        
* @apiParam {String} id  商品 Id
* 
* @apiSuccess {Number} err 状态码. 
* @apiSuccess {String} msg 信息提示.
*/ 

router.post('/fosterupdate',(req,res)=>{
  const {_id,peoplename,telephpne,petnane,Coatcolor,room,weight,sex,age,fosternum,food} = req.body
  Fostermanagement.update({_id},{peoplename,telephpne,petnane,Coatcolor,room,weight,sex,age,fosternum,food})
  .then((data)=>{
      console.log(data)
      res.send({err:0,msg:'修改成功'})


  })

})


/**
* @api {post}  http://localhost:3030/fostermanagement/fosterupdate
* @apiName  petfostercare/pcareadd                 
* @apiGroup  宠物寄养管理信息添加                  
* @apiParam {Number} id 宠物id   
* @apiParam {String} shop  店家名称
* @apiParam {String} peoplename 主人名字
* @apiParam {Number} telephpne  电话
* @apiParam {String} petnane  宠物名字
* @apiParam {String}  class 品种
* @apiParam {String}  Coatcolor 毛色
* @apiParam {String}  room 房间大小
* @apiParam {Number}  weight 体重
* @apiParam {String}  sex 性别
* @apiParam {Number}  age 年龄
* @apiParam {Number} fosternum 寄养数
* @apiParam {Boolean} food  是否给粮
*
* @apiSuccess {Number} err 状态码. 
* @apiSuccess {String} msg 信息提示.
*/ 






module.exports = router
