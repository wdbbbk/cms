import React from 'react'
import { Result, Button ,Card} from 'antd';
class AddSuccess extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <Card>
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        />
      </Card>
    )
  }
}
export default AddSuccess