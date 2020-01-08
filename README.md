redux 已下载
react-redux 已下载
- 插件的使用
  - axios 
  ```js
    axios相关知识
    必用拦截器  npm 搜索 interceptors 复制一下代码
  ```
  - ui插件 `npm i antd`
  - less 插件`npm i less less-loader  ` 两个less插件
  - **按需引入** 
    安装插件 npm i babel-plugin-import
    配置文件搜一下 babel-loader 找到他下边的这个配置一下
    ```js
    plugins: [
      ["import", { "libraryName": "antd", style: true }], //把这一行加上
      npm i less@2.7.3   再重新装一下 less 要不版本太高
    ```
  - npm i echarts-for-react npm echarts
  - 路由懒加载 react-loadable
  
  - this.props.children 这是个什么东西

  - 权限处理 pm02  - 2个视频
  - 解决跨域
  ```js
  public: allowedHost,
    proxy:{
      '/cms':{
        target:'http://localhost:3030',
        changeOrigin:true,
        pathRewrite:{
          "^cms":""
        }
      }
    },
  ```
  - api 请求单独拉一个文件出来
  两种方法
    + 第一种方法  返回Promise
    ```js
    export const UserLogin = (userName,passWord)=>{
      return new Promise((resolve,reject)=>{
        this.$axios.get(
          '/cms/user/login',
          {params:{userName:values.username,passWord:values.password}}
        )
        .then((data)=>{
          resolve(data)
        })
      })
    }
    ```
    + 第二种方法
     第二种处理api 请求 async 处理
     async await 会自动返回一个promis return 的值将会被.then接受
     如果想被.catch接受 就受用抛出一个错误  throw
    ```js
    export const UserLogin = async (userName,passWord)=>{
      let data = await axios.get(
        '/cms/user/login',
        {params:{userName:userName,passWord:passWord}}
      )
      return(data.data)
    }
    ```
    父子传参 涉及到this 的函数 
    1. 要用箭头函数
    2. 或者是传递方法的时候 传递一个this过去
      hehe={this.hehe.bind(this)}
    - 二次封装上传图片
### node 的小知识
  用到的插件
  - jsonwebtoken npm i jsonwebtoken  生成token
  - nodemailer 发送邮件
