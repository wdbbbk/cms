const mongoose = require('mongoose')
let VipManageSchema = mongoose.Schema({
  vipName:{type:String,require:true},
  vipPhone:{type:String,require:true},
  vipSite:{type:String,require:true},
  newTransactionTime:{type:String,require:true},
  payMoney:{type:String,require:true},
  giveMoney:{type:String,default:'0'},
  remarks:{type:String,default:'无备注信息'},
  vipGrade:{type:String,default:'银卡'}, //会员等级
  vipID:{type:String,default:'1'}, // 会员id
  vipIDcard:{type:String,default:'0001'}, //会员卡id
  timestamp:{type:String,require:true}, //注册时间的时间戳 排序用的
  // 宠物的信息
  petSex:{type:String,require:true},
  Nobaby:{type:String,require:true},
  petName:{type:String,require:true},
  petSpecies:{type:String,require:true},
  petAge:{type:String,require:true},
  petBreed:{type:String,require:true},
  petHeight:{type:String,require:true},
  petWeight:{type:String,require:true},
  petRemarks:{type:String,require:true}, 
  petimg:{type:String,require:true}, 

})
// schema对象与数据库建立联系
let VipManageModel = mongoose.model('vipManage',VipManageSchema)
// 抛出去
module.exports = VipManageModel