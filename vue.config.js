const path = require('path')
// 绝对路径的拼接
function resolve(dir){
  return path.join(__dirname,dir)
}
//抛出一个文件 里边写你要配置的东西
module.exports = {  
  publicPath:'./', // npm run build 之后 的资源路径默认是 /  这样我们可以改了
  // 给路径  起别名
  chainWebpack:((config)=>{
    config.resolve.alias
    .set('api',resolve('./src/api'))  // 这里是链式调用别加逗号
    .set('style',resolve('./src/style')) // style 用的时候需要加 ~  ~style/xxx
    .set('utils',resolve('./src/utils'))
    .set('router',resolve('./src/router')) // 路由
    .set('components',resolve('./src/components')) // 组件库
    .set('pages',resolve('./src/pages')) // 阿里图标
    .set('iconcss',resolve('./src/iconfont/iconfont.css')) // 阿里图标
    .set('iconjs',resolve('./src/iconfont/iconfont.js')) // 阿里图标
  })
}