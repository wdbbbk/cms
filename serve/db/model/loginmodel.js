const mongoose = require('mongoose')
let LoginSchema = mongoose.Schema({
  userName:{type:String,require:true},
  passWord:{type:String,default:'123456'},
  token:{type:String,default:''}
})
// schema对象与数据库建立联系
let loginModel = mongoose.model('users',LoginSchema)

// 抛出去
module.exports = loginModel