import React from 'react'
import {Route,Switch,Redirect,BrowserRouter} from 'react-router-dom'
import loadRouter from '../utils/loadRouter'
const Login = loadRouter(()=>import('../Pages/Login/login'))
const Admin = loadRouter(()=>import('../Pages/Admin/admin'))
const Home = loadRouter(()=>import('../Pages/Admin/Home/home'))
const vipmanage = loadRouter(()=>import('../components/vip/vipmanage/vipmanage'))
const vipadd = loadRouter(()=>import('../components/vip/vipadd/vipadd'))
class router extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Redirect exact from='/' to='/login'></Redirect>
          <Route   path='/login' component={Login}></Route>
          <Route  path='/admin' render={()=>{
            return(
              <Admin>
                <Switch>
                  <Redirect exact from='/admin' to='/admin/home'></Redirect>
                  <Route exact path='/admin/home' component={Home}></Route>
                  {/*  */}
                  <Route exact path='/admin/vip/vipmanage' component={vipmanage}></Route>
                  <Route exact path='/admin/vip/vipadd' component={vipadd}></Route>
                </Switch>
              </Admin>
            )
          }
          }></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default router