// 商品更新的抽屉
import React,{Fragment} from 'react'
import { Button } from 'antd'
import {SpUpdata,SpList,Spadd} from '../../../../api/shopping/spList'
// 上传图片的文件
import UploadImg from '../../../upload/upload'
class Spup extends React.Component {
  constructor(props){
    super()
    this.state=props.res==''?{spname:'',img:'',price:'',brand:'',inventory:''} :props.res
  }
  callback=(data)=>{
    this.setState({img:data})
  }
  componentWillReceiveProps(props,state){
    console.log('qqq',props)
    if(props.res){
      let {spname,img,price,brand,inventory} = props.res
      this.setState({spname,img,price,brand,inventory})
    }else{
      this.setState({spname:'',img:'',price:'',brand:'',inventory:''})
    }
    
  }
  render() {
    let {spname,img,price,brand,inventory} = this.state
    
    return (
      <Fragment>
          <i>商品名称</i>
          <input type='text' value={spname} onChange={(e)=>{
            this.setState({spname:e.target.value})
            console.log(e.target.value)
          }}/>
          <i>商品图片</i>
          <UploadImg callback={this.callback}></UploadImg>
          <i>商品价格</i>
          <input type='Number' value={price} onChange={(e)=>{
            this.setState({price:e.target.value})
          }}/>
          <i>品牌</i>
          <input type='text'value={brand} onChange={(e)=>{
            this.setState({brand:e.target.value})
          }}/>
          <i>库存</i>
          <input type='Number'value={inventory} onChange={(e)=>{
            this.setState({inventory:e.target.value})
          }}/>
          <Button 
                  type="primary" 
                  shape="round" 
                  icon="plus" 
                  onClick={()=>{
                    if(this.props.alState){
                      Spadd(this.state)
                    }else{
                      SpUpdata(this.state)
                    }
                    // console.log(this.state)
                  }}
                  
                  >
          {this.props.alState?'添加':'修改'}
        </Button>
        

      </Fragment>
    );
  }
}

export default Spup