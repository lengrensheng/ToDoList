/**
 * Created by  on 2016/6/8.
 */
import React,{Component} from 'react';
import {
    ListView,
} from 'react-native';

const defaultTodos = [
    {text: 'Test data one'},
    {text: 'Test data two'},
    {text: 'Test data three'},
    {text: 'Test data four'},
    {text: 'Test data five'},
    {text: 'Test data six'},
];
module.exports = function (state, action) {
    state = state || {
            type: 'INITIAL_TODOS',
            todos: [],
        }
    switch (action.type){
        case 'LOAD_TODOS':{
            let dataSource = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
            dataSource = dataSource.cloneWithRows(defaultTodos);
            return{
                ...state,
                ...action,
                todos:defaultTodos,
                dataSource,
            }
        }
    }
    return {
        ...state
    }
};