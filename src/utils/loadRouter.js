import React from 'react'
import Loadable from 'react-loadable';
//这个是过渡组件
export default (component)=>{
  function Loading(){
    return(
      <h1>我是真的皮我是真的皮我是真的皮我是真的皮我是真的皮</h1>
    )
  }
  const LoadableComponent = Loadable({
    //你要懒加载的组件
    loader: component,//() => import('./my-component')
    loading: Loading,
  });
  return(
    class App extends React.Component {
      render() {
        return (
          <LoadableComponent>
            {this.props.children}
          </LoadableComponent>
        );
      }
    }
  )
}