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
  const{vipName,vipPhone,vipSite,newTransactionTime,payMoney,giveMoney,remarks,petimg,timestamp} = req.body
  VipManageModel.find({vipPhone})
  .then(data=>{
    if(data.length){
      res.send({err:0,msg:'添加失败,此手机号会员已经注册'})
    }else{
      VipManageModel.find().limit(1)
      .then(data=>{
        if(data.length){
          VipManageModel.find().sort({'vipID': -1}).limit(1)
          .then(data=>{
            let vipID =  Number(data[0].vipID)+ 1
            VipManageModel.insertMany({vipID,vipName,vipPhone,vipSite,newTransactionTime,payMoney,giveMoney,remarks,petimg,timestamp})
            .then((data)=>{
              res.send({err:1,msg:'添加成功',_id:data[0]._id})
            })
          })
        }else{
          let vipID = 1
          VipManageModel.insertMany({vipID,vipName,vipPhone,vipSite,newTransactionTime,payMoney,giveMoney,remarks,petimg,timestamp})
          .then((data)=>{
            res.send({err:1,msg:'添加成功',_id:data[0]._id})
          })
        }
      })
      
      
    }
  })
})
//宠物添加接口
router.post('/petAdd',(req,res)=>{
  const{_id,petSex,Nobaby,petName,petSpecies,petAge,petBreed,petHeight,petWeight,petRemarks,petimg} = req.body
  VipManageModel.updateOne({_id},{petSex,Nobaby,petName,petSpecies,petAge,petBreed,petHeight,petWeight,petRemarks,petimg})
  .then((data)=>{
    res.send({err:1,msg:'添加成功'})
  })
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
  let{minNum,pageSize,arrow,sortcol} = req.body
  arrow = arrow || -1    // 默认按时间排序 倒序排列
  sortcol = sortcol || 'timestamp' // 默认按时间排序 倒序排列
    VipManageModel.find().sort({[sortcol]: arrow})
    .then((data)=>{
      console.log(data)
      let total = data.length
      res.send({err:1,msg:'查询成功',data:data.splice(minNum,pageSize),total})
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
  let{vipName,petHeight,petWeight,vipSite,vipPhone,petimg,petName,Nobaby,_id}=req.body
  console.log(_id)
  VipManageModel.updateOne({_id},{vipName,petHeight,petWeight,vipSite,vipPhone,petimg,petName,Nobaby})
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
// 按需查询会员信息
router.post('/queryVip',(req,res)=>{
  let{value}=req.body
  let reg = RegExp(value)
  VipManageModel.find({$or:[{vipPhone:reg},{vipName:reg},{petName:reg}]})
  .then((data)=>{
    res.send({err:1,msg:'查询成功',data:data})
  })
})
module.exports = router



