import { legacy_createStore, applyMiddleware, combineReducers   }  from 'redux';
import myReducer from './reducer';
import cartReducer from './cartReducer';
import isAuthReducer from './isAuthReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const combineReducer = combineReducers({
    cartReducer, isAuthReducer
})

export  const store = legacy_createStore(cartReducer,
    composeWithDevTools(applyMiddleware(thunk)));