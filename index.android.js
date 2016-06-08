/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './src/containers/App';

var ToDoList = React.createClass({
   render(){
       return(
           <App/>
       );
   }
});
AppRegistry.registerComponent('ToDoList', () => ToDoList);
