// 商品更新的抽屉
import React,{Fragment} from 'react'
import { Button } from 'antd'
class Spup extends React.Component {
  constructor(){
    super()
    this.state={  
      size: 'large', // button 按钮需要
   }
  }
  
  render() {
    return (
      <Fragment>
          <i>商品名称</i>
          <input type='text'/>
          <i>商品图片</i>
          <input type='text'/>
          <i>商品价格</i>
          <input type='Number'/>
          <i>品牌</i>
          <input type='text'/>
          <i>库存</i>
          <input type='Number'/>
          <Button type="primary" shape="round" icon="plus" size={this.size}>
          添加
        </Button>

      </Fragment>
    );
  }
}

export default Spup