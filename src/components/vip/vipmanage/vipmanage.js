import React,{Fragment} from 'react'
import { Table , Pagination,  Button ,Spin , Modal} from 'antd';
import {manageList} from '../../../api/manage/manage'
import less from './table.module.less'
import DrawerBox from './drawer/drawer'
const { confirm } = Modal;
function showDeleteConfirm() {
  confirm({
    title: '你确定要删除吗?',
    content: '您将会删除这条信息!',
    okText: '确定',
    okType: 'danger',
    cancelText: '取消',
    confirmLoading:true,
    onOk() {
      console.log('删除这条数据');
      // 这里就可以发送ajax请求了
      // .then((data)=>{
      //   //删除后提示 删除成功
      // })
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

class UserManage extends React.Component{
  constructor(){
    super()
    this.state = {
      drawerdata:'', // 点击的时候改变值传给抽屉
      visible: false,  //控制抽屉的显示隐藏
      loading:true,
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
          render:(data)=>{
            return(
              <Fragment>
                <Button type="danger" onClick={()=>{
                  showDeleteConfirm()
                }}>删除</Button>
                <Button 
                  onClick={()=>{
                    this.setState({drawerdata:data})
                    this.changeDrawer()
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
  //修改按钮的函数
  changeDrawer=()=>{
    this.setState({visible:!this.state.visible})
  }

  //声明周期
  componentDidMount(){
    // this.setState({columns}) 
    manageList()
    .then((data)=>{
      console.log(data)
      this.setState({loading:false})
      this.setState({data})
    })

  }
  render(){
    return(
      <Fragment>
        <DrawerBox changeDrawer={this.changeDrawer} visible={this.state.visible} drawerdata={this.state.drawerdata}></DrawerBox>
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
        <Pagination  className={less.Pagination} simple defaultCurrent={1} total={9} 
          defaultPageSize={5} pageSize={5} 
        />
      </Fragment>
    )
  }
}

export default UserManage