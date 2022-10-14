import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { todoReducers } from './reducers/todosReducer';
import { tabReducer } from './reducers/tabReducer';
import thunk from 'redux-thunk';
const reducer=combineReducers(
    {
        todos:todoReducers,
        currentTab:tabReducer
    }
)
const middleware=[thunk];
const store =createStore(
  reducer,composeWithDevTools(applyMiddleware(...middleware))
)

export default store;