import React from 'react'
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom'
import Login from '../Pages/Login/login'
import Admin from '../Pages/Admin/admin'
class router extends React.Component{
  render(){
    return(
      <BrowserRouter>
        {/* <Redirect from='/' to='/login'></Redirect> */}
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default router