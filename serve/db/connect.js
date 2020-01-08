const mongoose  = require('mongoose')
mongoose.connect('mongodb:// 10.9.70.246:27017/2020cms',{ useNewUrlParser: true , useUnifiedTopology: true}) //通过mongodb协议连接到数据库no
var db = mongoose.connection
db.on('error',()=>{
  console.log('数据库链接失败')
})
db.once('open',()=>{
  console.log('数据库链接成功')
})