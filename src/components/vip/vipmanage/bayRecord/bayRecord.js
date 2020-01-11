import React from 'react'
import { Modal, Button } from 'antd';
import less from './bayRecord.module.less'
class BayRecord extends React.Component{
  constructor(props){
    super()
    this.state={
      visible: false,
      vipname:props.vipname
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render(){
    return(
      <div className={less.BayRecord}>
        <Button type="primary" onClick={this.showModal}>
          查看
        </Button>
        <Modal
          title={'会员消费详情'}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width='700px'
          centered='true'
        >
          <div className={less.Box} style={{height:'500px',overflow:'auto'}}>
            <p>2017年8月3日猫粮五斤</p>
            <p>2017年8月3日猫粮五斤</p>
            <p>2017年8月3日猫粮五斤</p>
            <p>2017年8月3日猫粮五斤</p>
            <p>2017年8月3日绝育,消费420元!</p>
            <p>2017年8月3日驱虫,消费420元!</p>
            <p>2017年8月3日猫粮五斤</p>
            <p>2017年8月3日猫粮五斤</p>
            <p>2017年8月3日猫粮五斤</p>
            <p>2017年8月3日猫粮五斤</p>
            <p>2017年8月3日绝育,消费420元!</p>
            <p>2017年8月3日驱虫,消费420元!</p>
            <p>2017年8月3日猫粮五斤</p>
            <p>2017年8月3日猫粮五斤</p>
            <p>2017年8月3日猫粮五斤</p>
            <p>2017年8月3日猫粮五斤</p>
            <p>2017年8月3日绝育,消费420元!</p>
            <p>2017年8月3日驱虫,消费420元!</p>
          </div>
        </Modal>
      </div>
      
    )
  }
}
export default BayRecord