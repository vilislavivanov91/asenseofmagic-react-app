import { createStore, combineReducers } from 'redux'
import cartReducer from './reducers/cart'
import productReducer from './reducers/products'

const reducers = combineReducers({cartReducer, productReducer})

const store = createStore(reducers)

export default store
