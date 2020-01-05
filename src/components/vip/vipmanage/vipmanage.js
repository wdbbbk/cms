import React,{Fragment} from 'react'
import { Table , Pagination,  Button ,Spin , Modal ,Drawer, message} from 'antd';
import {manageList} from '../../../api/manage/manage'
import {delVip} from '../../../api/manage/manage'
import less from './table.module.less'
import DrawerBox from './drawer/drawer'
const { confirm } = Modal;

class UserManage extends React.Component{
  constructor(){
    super()
    this.state = {
      drawerdata:'', // 点击的时候改变值传给抽屉
      visible: false,  //控制抽屉的显示隐藏
      loading:true,
      page:1,
      pageSize:5,
      total:111,
      columns:
      [
        {
          title: '宠物名称',
          dataIndex: 'petname',
          key: 'petname',
          width:100,
        },
        {
          title: '宠物年龄',
          dataIndex: 'petage',
          key: 'petage',
          width:100,
        },
        {
          title: '宠物性别',
          dataIndex: 'petsex',
          key: 'petsex',
          width:100,
        },
        {
          title: '主人姓名',
          dataIndex: 'hostname',
          key: 'hostname',
          width:100,
        },
        {
          title: '主人手机号码',
          dataIndex: 'hostphone',
          key: 'hostphone',
          width:100,
        },
        {
          title: '宠物照片',
          dataIndex: 'petimg',
          key: 'petimg',
          width:200,
          render(data){
            return(
              <img width='80' height='80' src={data} alt=''/>
            )
          }
        },
        {
          title: '操作',
          key: '_id',
          width:200,
          render:(res)=>{
            return(
              <Fragment>
                <Button type="danger" onClick={()=>{
                  this.showDeleteConfirm(res._id)
                }}>删除</Button>
                <Button 
                  onClick={()=>{
                    this.setState({drawerdata:res,visible:true})
                  }}
                >修改</Button>
              </Fragment>
            )
          }
        },
      ]
      ,
      data:[]
    }
  }
  // 删除按钮
  showDeleteConfirm(_id) {
    confirm({
      title: '你确定要删除吗?',
      content: '您将会删除这条信息!',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      confirmLoading:true,
      onOk:()=> {
        delVip(_id)
        .then(()=>{
          message.success('删除成功')
          this.getdata(this.state.page,this.state.pageSize)
        })
      },
      onCancel() {
        //点击取消的回调
      },
    });
  }
    
  //修改按钮的函数
  changeDrawer=(data)=>{
    this.setState({visible:!this.state.visible})
  }
 
  // 获取数据的函数
  getdata=(page, pageSize)=>{
    manageList(page, pageSize)
    .then((data)=>{
      console.log(data)
      this.setState({loading:false})
      this.setState({data})
    })
  } 
  //声明周期
  componentDidMount(){
    //单纯的获取页数的
    manageList('total')
    .then((data)=>{
      console.log(data)
      this.setState({total:data.length})
    })
    // 获取指定的信息的
    this.getdata(1,5)
  }
  render(){
    return(
      <Fragment>
        <Drawer 
          width={600}
          onClose={()=>{this.setState({visible:false})}}
          title="修改会员信息" //标题
          visible={this.state.visible}
        >
          <DrawerBox getdata={this.getdata} changeDrawer={this.changeDrawer} visible={this.state.visible} drawerdata={this.state.drawerdata}></DrawerBox>
        
        </Drawer>
        <Spin spinning={this.state.loading}>
          <div  className={less.CardBox}>
            <Table className={less.tableBox}
              columns={this.state.columns}  //表头数据
              dataSource={this.state.data}  // table 数据
              rowKey="_id" pagination={false}  // key值 跟去除默认分页
              scroll={{y:300}}
            />
          </div>
        </Spin>
        <Pagination  className={less.Pagination} simple defaultCurrent={1} total={this.state.total} 
           pageSize={5}  onChange={(page, pageSize)=>{
              this.setState({page})
              this.getdata(page, pageSize)
           }}
        />
      </Fragment>
    )
  }
}

export default UserManage