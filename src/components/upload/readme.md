封装的 upload 图片上传
1. 在你需要的地方引入我
2. <UploadImg callback={this.callback} imageUrl={this.state.imageUrl}></UploadImg>
    + 这个 callback() 方法需要你自己写 
    + 这是一个回调函数()
    + this.state.imageUrl 是你传给我的图片 让我以后每次显示的 
你操作上边这两步就够用了   
3. 
3. callback(base64) 
    + 我会把你上传的这张图片的 base54 当做参数传给你  
    + 这个base4 你,爱干嘛,干嘛去
