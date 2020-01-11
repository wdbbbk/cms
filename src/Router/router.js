import React from 'react'
import {Route,Switch,Redirect,BrowserRouter} from 'react-router-dom'
import loadRouter from '../utils/loadRouter'
const Login = loadRouter(()=>import('../Pages/Login/login'))
const Admin = loadRouter(()=>import('../Pages/Admin/admin'))
const Home = loadRouter(()=>import('../Pages/Admin/Home/home'))
const vipmanage = loadRouter(()=>import('../components/vip/vipmanage/vipmanage'))
const vipadd = loadRouter(()=>import('../components/vip/vipadd/vipadd'))
const ShoppingToy = loadRouter(()=>import('../components/shopping/shoppingToy/shoppingToy'))
const ShoppingSnacks = loadRouter(()=>import('../components/shopping/shoppingSnacks/shoppingSnacks'))
const ShoppingFood = loadRouter(()=>import('../components/shopping/shoppingFood/shoppingFood'))
const cosmetologym = loadRouter(()=>import('../components/management/Cosmetology/cosmetologym'))
const fostermanagem = loadRouter(()=>import('../components/management/Fostermanage/fostermanagem'))
const pcarem = loadRouter(()=>import('../components/management/Pcare/pcarem'))
const pcaremadd = loadRouter(()=>import('../components/management/Pcare/pcaremadd'))
const pcaremlist = loadRouter(()=>import('../components/management/Pcare/pcaremlist'))


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
                  {/* 商品路由 */}
                  <Route exact path='/admin/shopping/toy' component={ShoppingToy}></Route>
                  <Route exact path='/admin/shopping/snacks' component={ShoppingSnacks}></Route>
                  <Route exact path='/admin/shopping/food' component={ShoppingFood}></Route>

                  {/* 服务管理 */}
                  <Route exact path='/admin/management/cosmetologym' component={cosmetologym}></Route>
                  <Route exact path='/admin/management/fostermanagem' component={fostermanagem}></Route>
                  <Route exact path='/admin/management/pcarem' component={pcarem}></Route>
                  <Route exact path='/admin/management/pcarem/add' component={pcaremadd}></Route>
                  <Route exact path='/admin/management/pcarem/list' component={pcaremlist}></Route>
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