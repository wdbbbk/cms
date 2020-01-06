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
      total:1,
      columns:
      [
        {
          title: '会员编号',
          dataIndex: 'petname',
          key: 'petname',
          width:100,
        },
        {
          title: '会员姓名',
          dataIndex: 'petage',
          key: 'petage',
          width:100,
        },
        {
          title: '会员卡号',
          dataIndex: 'petsex',
          key: 'petsex',
          width:100,
        },
        {
          title: '会员级别',
          dataIndex: 'hostname',
          key: 'hostname',
          width:100,
        },
        {
          title: '手机号码',
          dataIndex: 'hostphone',
          key: 'hostphone',
          width:100,
        },
        {
          title: '剩余余额',
          dataIndex: 'petimg',
          key: 'petimg',
          width:100,
        },
        {
          title: '宠物登记',
          dataIndex: 'petimg',
          key: 'petimg',
          width:100,
        },
        {
          title: '消费记录',
          dataIndex: 'petimg',
          key: 'petimg',
          width:200,
        },
        {
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
          this.getdata(this.state.page,this.state.pageSize)
          message.success('删除成功')
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
      this.setState({loading:false})
      this.setState({data:data.data.data,total:data.data.total})
    })
  } 
  //声明周期
  componentDidMount(){
    // 获取指定的信息的
    // this.getdata(1,5)
    this.setState({loading:false})
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
          <DrawerBox page={this.state.page} pageSize={this.state.pageSize} getdata={this.getdata} changeDrawer={this.changeDrawer} visible={this.state.visible} drawerdata={this.state.drawerdata}></DrawerBox>
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