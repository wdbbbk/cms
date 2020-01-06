const express = require('express')
const router = express.Router()
const VipManageModel = require('../db/model/Vipmanage')   // 用于增删改查
/**
 * @api {get} http://localhost:3030/vipMange/add
 * @apiName  vipMange/add                   
 * @apiGroup  会员信息添加                  
 *        
 * @apiParam {String} petname  宠物名称
 * @apiParam {String} petage  宠物年龄
 * 
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */
// 添加会员接口
router.post('/add',(req,res)=>{
  const{petname,petage,petsex,hostname,hostphone,petimg} = req.body
  VipManageModel.insertMany({petname,petage,petsex,hostname,hostphone,petimg})
  res.send({err:1,msg:'添加成功'})
})
/**
 * @api {get} http://localhost:3030/vipMange/list
 * @apiName  vipMange/list                   
 * @apiGroup  会员信息查看                  
 *        
 * @apiParam {String} minNum  第几页的页数
 * @apiParam {String} pageSize  一页显示几个
 * @apiParam {String} total 如果你想获取所有数据就传一个 'total' 字符串
 * 
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */
// 获取vip的列表
router.post('/list',(req,res)=>{
  let{minNum,pageSize} = req.body
    VipManageModel.find()
    .then((data)=>{
      if(minNum !== 'total'){
        res.send({err:1,msg:'查询成功',data:data.splice(minNum,pageSize)})
      }else{
        res.send({err:1,msg:'查询成功',data:data})
      }
    })
  
})
/**
 * @api {get} http://localhost:3030/vipMange/changeVipMsg
 * @apiName  vipMange/changeVipMsg                   
 * @apiGroup  会员信息修改                 
 *        
 * @apiParam {String} petname  宠物名称
 * @apiParam {String} petage  宠物年龄
 * 
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */
// 修改vip信息
router.post('/changeVipMsg',(req,res)=>{
  let{petname,petage,petsex,hostname,hostphone,petimg,_id}=req.body
  console.log(_id)
  VipManageModel.updateOne({_id},{petname,petage,petsex,hostname,hostphone,petimg})
  .then((data)=>{
    res.send({err:1,msg:'更改成功',data:data})
  })
})
/**
 * @api {get} http://localhost:3030/vipMange/delVip
 * @apiName  vipMange/delVip                   
 * @apiGroup  会员信息删除                
 *        
 * @apiParam {String} _id  会员的主键id
 * 
 * @apiSuccess {Number} err 状态码. 
 * @apiSuccess {String} msg 信息提示.
 */
// 删除会员信息
router.post('/delVip',(req,res)=>{
  let{_id}=req.body
  VipManageModel.deleteMany({_id})
  .then((data)=>{
    res.send({err:1,msg:'删除成功',data:data})
  })
})
module.exports = router



