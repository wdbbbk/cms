const express = require('express')
const app = express()
const db = require('./db/connect') // 链接数据库
const userRouter = require('./router/userRouter') 
const vipManage = require('./router/vipManage') 
const spManage = require('./router/spRouter') 

app.use('/user',userRouter)  // 登录注册的路由
app.use('/vipManage',vipManage) // 用户添加删除的路由
app.use('/spManage',spManage) // 添加商品

app.listen(3030,()=>{
  console.log('链接成功')
})