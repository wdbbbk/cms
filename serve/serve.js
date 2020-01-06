const express = require('express')
const app = express()
const db = require('./db/connect') // 链接数据库
const userRouter = require('./router/userRouter') 
const vipManage = require('./router/vipManage') 
const spManage = require('./router/spRouter') 
// 解析post 下边三行代码都是
const bodyParser=require('body-parser')   //这玩意需要下载
app.use(bodyParser.urlencoded({ extended: false }))
//处理图片大小限制
app.use(bodyParser.json({limit:'5mb'}));

//路由的转发
app.use('/user',userRouter)  // 登录注册的路由
app.use('/vipManage',vipManage) // 用户添加删除的路由
app.use('/spManage',spManage) // 添加商品

app.listen(3030,()=>{
  console.log('链接成功')
})