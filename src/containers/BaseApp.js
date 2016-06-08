/**
 * Created by  on 2016/6/8.
 */
import React,{Component,Platform} from 'react';
import {
    View,
    Text,
    Navigator,
    TabBarIOS,
    StatusBar,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import * as actions from '../actions';
import List from './List';
//把上一个APP入口传入的Store里的state取到，然后作为props在BaseApp里面使用
@connect(state=>({
    state:state
}))
export default class BaseApp extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          this.initialRoute={
              name:'List',
              component:List,
          }
      }
    configureScene(){
        if(Platform.OS==='ios'){
            return Navigator.SceneConfigs.PushFromRight;
        }
        return Navigator.SceneConfigs.VerticalDownSwipeJump;
    }
    renderScene(route,navigator){
        let Component = route.component;
        const {state,dispatch} = this.props;
        const action = bindActionCreators(actions,dispatch);
        return(
            <Component
                state={state}
                actions={action}
                {...route.params}
            navigator={navigator}/>
        );
    }
    render(){
        var _this = this;
        return(
          <Navigator
            initialRoute={_this.initialRoute}
            configureScene={_this.configureScene().bind()}
            renderScene={_this.renderScene.bind(_this)}/>
        );
    }
}