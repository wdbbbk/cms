const mongoose = require('mongoose')
let VipManageSchema = mongoose.Schema({
  petname:{type:String,require:true},
  petage:{type:String,require:true},
  petsex:{type:String,require:true},
  hostname:{type:String,require:true},
  hostphone:{type:String,equire:true},
  petimg:{type:String,default:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578065217392&di=055c86be6806abb090d6d413aa86237f&imgtype=0&src=http%3A%2F%2Fimgwx5.2345.com%2Fdypcimg%2Fzongyi%2Fimg%2Fb%2F9%2Fsup28642_223x310.jpg'},
})
// schema对象与数据库建立联系
let VipManageModel = mongoose.model('vipManage',VipManageSchema)
// 抛出去
module.exports = VipManageModel