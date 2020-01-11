import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { Card } from 'antd'
import less from './yingshouzhanbi.module.less'
class Yingshouzhanbi extends React.Component{
  constructor(){
    super()
    this.state={
      option : {
        title: {
          text: '营收占比',
          left: 195,
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['猫粮', '寄养', '玩具', '医疗', '美容']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['55%', '60%'],
            label: {
              emphasis: {
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              {value: 335, name: '猫粮'},
              {value: 310, name: '寄养'},
              {value: 234, name: '玩具'},
              {value: 135, name: '医疗'},
              {value: 1548, name: '美容'}
            ]
          }
        ]
      }    
        
    }
  }
  render(){
    return(
      <Card className={less.yingshouzhanbi}>
        <ReactEcharts option={this.state.option} />
      </Card>
    )
  }
}
export default Yingshouzhanbi
