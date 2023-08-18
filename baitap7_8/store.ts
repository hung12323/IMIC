import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import calculatorReducer from './calculatorReducer';

const store = createStore(calculatorReducer, applyMiddleware(thunk));

export default store;
