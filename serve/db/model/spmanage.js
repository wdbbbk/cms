const mongoose = require('mongoose')
let SpManageSchema = mongoose.Schema({
  spname:{type:String,require:true},
  img:{type:String,require:true},
  price:{type:String,require:true},
  brand:{type:String,require:true},
  inventory:{type:Number,equire:true},
})
// schema对象与数据库建立联系
let SpManageModel = mongoose.model('spManage',SpManageSchema) //第一个参数 表名 第二个参数 schema集合
// 抛出去
module.exports = SpManageModel  //抛出