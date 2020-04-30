import React from 'react'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk  from 'redux-thunk'
import data_Reducer from './Data/reducer'


const reducer= combineReducers({data_Reducer})

const store= createStore(reducer,applyMiddleware(thunk))

export default store;