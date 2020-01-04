'use strict';
const nodemailer = require('nodemailer');
  let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '1140272398@qq.com', // generated ethereal user
      pass: 'jyuunoaeaogcibdj' // generated ethereal password
    }
  });
// 二次封装一下

  module.exports = {
    sendMail(mail,num,callback){
      const mailobj = {
        from: '"To stars 👻" <1140272398@qq.com>', 
        to: mail,
        subject: 'Hello', 
        // text: 'Hello world?', 
        html: `<h1 style="color: red;">这是你登录需要的验证码!你的验证码为${num},有效期五分钟</h1>`
      }
      transporter.sendMail(mailobj,(err,data)=>{
        if(err){
          callback(0)
        }else{
          callback(1)
        }
      });
    }
  }

  