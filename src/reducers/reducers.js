import {combineReducers} from 'redux';
import GroceryReducers from './GroceryReducers';

export default combineReducers({grocery: GroceryReducers});