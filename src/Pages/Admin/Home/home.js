import React,{Fragment} from 'react';
import Pit from '../../../components/echarts/pieChart'
import Yingshouzhanbi from '../../../components/echarts/yingshouzhanbi'
import less from './home.module.less'
class Home extends React.Component{
  render(){
    return(
      <div className={less.homeBox}>
        {/* <div className={less.homeHeaderBox}>
          <div className={less.AllmoneyBox}>
            <span>销售总额</span>
            <h1>￥1,444,222元</h1>
            <h1>周同比上涨12%</h1>
            <h1>日同比上涨8%</h1>
          </div>
        </div> */}
        <Yingshouzhanbi></Yingshouzhanbi>
        <Pit></Pit>
      </div>
    )
  }
}
export default Home;
