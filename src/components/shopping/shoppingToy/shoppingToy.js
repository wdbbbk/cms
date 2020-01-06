import React, { Component,Fragment } from 'react'
import { Table , Pagination,  Button ,Spin , Modal ,Drawer, message,Card,Icon,Radio} from 'antd';
import SpLess from './shoppingTop.module.less'
export class ShoppingToy extends Component {
  constructor(){
    super()
    this.state = {
      size: 'large',
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
                    this.setState({drawerdata:res,visible:true})
                  }}
                >修改</Button>
                <Button type="danger" onClick={()=>{
                  this.showDeleteConfirm(res._id)
                }}>删除</Button>
              </Fragment>
            )
          }
        },
      ],
      data:[ // 列表数据
        {
          spname:'spname',
          img:'老大',
          price:'666',
          brand:'艾森',
          inventory:'186'
        }
      ]
    }
  }
  render() {
    return (
      <Fragment>
      <div className={SpLess['Sp-box']}>
        <Table  className= { SpLess['Tab-box'] }
                columns={this.state.columns}
                dataSource={this.state.data}
                rowKey="_id" pagination={false} // key值 和 去掉默认分页
        />
      </div>
      <div>
        {/* 添加商品按钮 */}
        <Button type="primary" 
                shape="round" 
                icon="plus" 
                size={this.size}
                className={SpLess['Tab-add']}
        >
          添加商品
        </Button>
        {/* 分页 */}
        <Pagination simple defaultCurrent={2} total={50} 
                    className={SpLess['Tab-pagination']}
        />
      </div>
      </Fragment>
    )
  }
}

export default ShoppingToy
