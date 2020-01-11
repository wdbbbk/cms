import React, { Component,Fragment } from 'react'
import { Table , Pagination,  Button  ,Drawer, Input, Card } from 'antd';
import SpLess from './shoppingTop.module.less'
import {SpList,SpListdel,SpKeyword} from '../../../api/shopping/spList'
import Spup from '../shoppingToy/spup/soup'
const { Search } = Input;
export class ShoppingToy extends Component {
  constructor(){
    super()
    this.state = {
      DrawerData:'', //用来给抽屉传值
      alState:true,// 用来控制抽屉的切换
      visible:false, // 控制抽屉显示隐藏
      page:1, // 当前页
      pageSize:6, // 每页的数量
      columns: //表头数据
      [
        {
          title: '商品名称',
          dataIndex: 'spname',
          key: 'spname',
          width:100,
        },
        {
          title: '图片',
          dataIndex: 'img',
          key: 'img',
          width:100,
          render:(img)=>{
            return(
              <img src={img} width='80'/>
            )
          }
        },
        {
          title: '价格',
          dataIndex: 'price',
          key: 'price',
          width:100,
        },
        {
          title: '品牌',
          dataIndex: 'brand',
          key: 'brand',
          width:100,
        },
        {
          title: '库存',
          dataIndex: 'inventory',
          key: 'inventory',
          width:100,
        },
        { // 修改和删除
          title: '操作',
          key: '_id',
          width:200,
          render:(res)=>{
            return(
              <Fragment>
                <Button 
                  onClick={()=>{
                    this.setState({DrawerData:res})
                    // console.log(res)
                    this.setState({alState:false,visible:true})
                  }}
                >修改</Button>
                <Button type="danger" onClick={()=>{
                  let _id = res._id
                  SpListdel(_id).then(()=>{
                    SpList({page:this.state.page,pageSize:this.state.pageSize})
                      .then((data)=>{
                        this.data= this.setState({data})
                      })
                  })
                }}>删除</Button>
              </Fragment>
            )
          }
        },
      ],
      data:{} // 列表数据
        
      
    }
  }
  componentDidMount(){
    SpList({page:this.state.page,pageSize:this.state.pageSize})
    .then((data)=>{
      this.data= this.setState({data})
    })
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <Fragment>
        <Card>
          <Search placeholder="请输入商品名称或品牌" 
                  onSearch={
                    (value)=>{
                      SpKeyword(value)
                      .then((res)=>{
                        console.log(res.data.data.length)
                        let length = res.data.data.length
                        if(length>0){
                          let data = res.data
                          this.setState({data:data})
                        }else{
                          window.alert('没有相关数据')
                        }
                      })
                    }
                    
                  } 
                  enterButton  
                  className={SpLess['search']}/> 
           {/* 添加商品按钮 */}
        <Button type="primary"
                className={SpLess['button']} 
                shape="round" 
                icon="plus" 
                className={SpLess['Tab-add']}
                onClick={()=>{
                  this.setState({alState:true,visible:true})
                }}
        >
          添加商品
        </Button>
        </Card>
      <div className={SpLess['Sp-box']}>
        <Table  className= { SpLess['Tab-box'] }
                columns={this.state.columns}
                dataSource={this.state.data.data}
                rowKey="_id" pagination={false} // key值 和 去掉默认分页
        />
      </div>
      <div>
       
        {/* 商品更新的抽屉 */}
        <Drawer
          title={this.state.alState?'添加商品':'修改商品'}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Spup res={this.state.alState?'':this.state.DrawerData} alState={this.state.alState}></Spup>

        </Drawer>
        
        
        {/* 分页 */}
        <Pagination simple defaultCurrent={this.state.page} total={this.state.data.datalength} 
                    pageSize={7}
                    className={SpLess['Tab-pagination']}
                    onChange={(page,pageSize)=>{
                      // console.log(page)
                      // console.log(this)
                      this.setState({page:page})

                      SpList({page,pageSize:this.state.pageSize})
                      .then((data)=>{
                        this.data= this.setState({data})
                      })
                    }}
        />
      </div>
      </Fragment>
    )
  }
}

export default ShoppingToy
