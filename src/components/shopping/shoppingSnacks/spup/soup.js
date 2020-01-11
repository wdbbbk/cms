// 商品更新的抽屉
import React,{Fragment} from 'react'
import { Button ,message} from 'antd'
import {SuUpdata,SuList,Suadd} from '../../../../api/shoppongSnacks/snList'
import suless from './spup.module.less'
// 上传图片的文件
// import UploadImg from '../../../upload/upload'
class Spup extends React.Component {
  constructor(props){
    super()
    this.state=props.res==''?{spname:'',img:'',price:'',brand:'',inventory:''} :props.res
    this.state.img=''
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
          <i className={suless['name']}>商品名称</i>
          <input className={suless['input']} type='text' value={spname} onChange={(e)=>{
            this.setState({spname:e.target.value})
            console.log(e.target.value)
          }}/>
          <i className={suless['name']}>商品图片</i>
          {/* <UploadImg callback={this.callback} imageUrl={this.state.imageUrl}></UploadImg> */}
          <input className={suless['input']} type="text" value={img} onChange={(e)=>{
            this.setState({img:e.target.value})    
          }}/>
          <i className={suless['name']}>商品价格</i>
          <input className={suless['input']} type='Number' value={price} onChange={(e)=>{
            this.setState({price:e.target.value})
          }}/>
          <i className={suless['name']}>品牌</i>
          <input className={suless['input']} type='text'value={brand} onChange={(e)=>{
            this.setState({brand:e.target.value})
          }}/>
          <i className={suless['name']}>库存</i>
          <input className={suless['input']} type='Number'value={inventory} onChange={(e)=>{
            this.setState({inventory:e.target.value})
          }}/>
          <Button 
                  className={suless['button']}
                  type="primary" 
                  shape="round" 
                  icon="plus" 
                  onClick={()=>{
                    if(this.props.alState){
                      Suadd(this.state)
                      .then(()=>{
                          message
                          .loading('正在添加中', 2.5)
                          .then(() => message.success('添加成功', 2.5))
                      })
                    }else{
                      SuUpdata(this.state)
                      .then((data)=>{
                        message
                          .loading('正在修改中', 2.5)
                          .then(() => message.success('修改成功', 2.5))
                      })
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