import React, { Component } from 'react'
import { Card,Pagination,Button,Drawer,Table,Popconfirm, message,Spin} from 'antd';
import { Pcaregetinfo } from '../../../api/pcarem/pcarem'
// import columns from './columns'
import data from './data'


class pcarem extends Component{
    constructor(){
      super()
      this.state={
      spinning:false,
      data:[],
      columns:[
        {
          title: 'Shop',
          dataIndex: 'Shop',
          fixed:'left',
          width:200,
          filters: [
            {
              text: '成都',
              value: '成都',
            },
            {
              text: '贵阳',
              value: '贵阳',
            },
            {
              text: 'Submenu',
              value: 'Submenu',
              children: [
                {
                  text: '香格里拉',
                  value: '香格里拉',
                },
                {
                  text: '西双版纳',
                  value: '西双版纳',
                },
              ],
            },
          ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          onFilter: (value, record) => record.name.indexOf(value) === 0,
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['descend'],
        },
        {
          title: 'name',
          dataIndex: 'name',
          width:200,
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'bigclass',
          dataIndex: 'bigclass',
          width:100,
    
        },
        {
          title: 'smallclass',
          dataIndex: 'smallclass',
          width:100,
    
        },
       {
          title:'img',
          dataIndex:'imgpath',
          key:'img',
          width:300,
          render(data){
            return (<img width='80' height='60' src={data}/>)
          },
    
    
       },
        {
          title: 'price',
          dataIndex: 'price',
          width:100,
    
        },
        {
          title: 'sallprice',
          dataIndex: 'sallprice',
          width:100,
    
        }, 
        {
          title: 'cleandifficulty',
          dataIndex: 'cleandifficulty',
          width:100,
    
        },
        {
          title: 'Productnumber',
          dataIndex: 'Productnumber',
          width:200,
    
        },

        {
          title:"操作",
          key:'action',
          width:200,
          fixed:"right",
          dataIndex:"_id",
          render:(_id)=>{
            
            return (
              <div>
               
            <Popconfirm title='你确定要删除吗'
              onConfirm={()=>{
                this.del(_id)
              }}
              onCancel={()=>{
                message.info('取消删除')

              }}
              okText='删除'
              cancelText='取消'

              
              >
           
                <Button type='danger' size='small'>删除</Button>
            </Popconfirm>
                <Button size='small'>修改信息</Button>    
              </div>

            )
          }
        },

    

        ]
      }
    }
    componentDidMount(){
     this.getTableData()

    }


    getTableData(){
      this.setState({spinning:true})

      Pcaregetinfo()
      .then((res)=>{
        console.log(res)
        let {foods,allCount} = res.data.list
        this.setState({data:foods,spinning:false})
      })
      .catch((err)=>{
        console.log(err)

      })
    }


    del(_id){
      this.getTableData()
     console.log('删除id',_id)

    }

  render(){
    let {columns,data,spinning} = this.state
   
    return(
      <Card title="宠物寄养信息登记中心">
        <Spin spinning={spinning}>
          <Table  rowKey="_id" scroll={{x:300,y:500}}  columns={columns} dataSource={data}></Table>
        </Spin>

      </Card>



    )



  }


}


     
        


export default pcarem
