const express = require('express')
const router = express.Router()
const loginModel = require('../db/model/loginmodel')   // 用于增删改查
const jwt = require('jsonwebtoken') //用于生成token
const {sendMail} = require('../utils/email')
// 登录接口
router.get('/login',(req,res)=>{
  const {userName,passWord} = req.query
  console.log(userName,passWord)
  loginModel.find({userName:userName,passWord:passWord})
  .then((data)=>{
    console.log(data)
    if(data.length){
      //  生成一个token
      let payload = {userName,passWord}
      let secret = '1safsafssdgsgsdgaf1212d'
      let token = jwt.sign(payload,secret)
      loginModel.updateOne({userName},{$set:{token}})
      .then((data)=>{
        console.log(data)
      })
      .catch((err)=>{
        console.log(err)
      })
      // 如果 账号密码在数据库里有那么返回登录成功   并且返回一个token
      res.send({err:1,msg:'登录成功',token:token})
     }else{
      res.send({err:0,msg:'账号密码不匹配'})
     }
  })
})

// 发一个邮件请求
let objMail = {}
router.get('/mail',(req,res)=>{
  const {mail} = req.query
  // 在这里判断数据库里有木有你这个邮箱号
  loginModel.find({userName:mail})
  .then((data)=>{
    if(data.length == 0){
      const num = parseInt(Math.random()*100000) 
      sendMail(mail,num,(a)=>{
        if(a){
          res.send({err:1,msg:'邮件发送成功'})
        }else{
          res.send({err:0,msg:'邮件发送失败'})
        }
      })
      objMail[mail] = num
      console.log(objMail)
    }else{
      res.send({err:-100,msg:'该邮箱已被注册'})
    }
  })
})
// 注册接口
router.get('/reg',(req,res)=>{
  const {userName,passWord,num} = req.query
  loginModel.find({userName})
  .then((data)=>{
    if(data.length){
       res.send({err:0,msg:'该邮箱已经注册成功情跳转灯录界面'})
    }else{
      if(objMail[userName] == num ){
        // 这里就是注册成功了需要把数据添加到数据库里
        loginModel.insertMany({userName:userName,passWord:passWord})
        res.send({err:1,msg:'注册成功'})
      }else{
        res.send({err:0,msg:'验证码不正确'})
      }
    }
  })
})

// 将这个router抛出
// 因为在主文件 里要用到
module.exports = router

