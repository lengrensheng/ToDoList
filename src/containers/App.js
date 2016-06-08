/**
 * Created by  on 2016/6/8.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import {Provider} from 'react-redux/native';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import BaseApp from './BaseApp';
//apply thunk
const createStoreWithThunk = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithThunk(reducer);
export default class App extends Component{
    render(){
        console.log(store);
        return(
          <Provider
            store={store}>
              {()=><BaseApp/>}
          </Provider>
        );
    }
}
