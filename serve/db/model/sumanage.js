const mongoose = require('mongoose')
let SuManageSchema = mongoose.Schema({
  spname:{type:String,require:true},
  img:{type:String,require:true},
  price:{type:String,require:true},
  brand:{type:String,require:true},
  inventory:{type:Number,equire:true},
})
// schema对象与数据库建立联系
let SuManageModel = mongoose.model('suManage',SuManageSchema) //第一个参数 表名 第二个参数 schema集合
// 抛出去
module.exports = SuManageModel  //抛出