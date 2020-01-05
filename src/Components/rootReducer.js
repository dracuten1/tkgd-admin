import LoginReducer from './Common/Login/LoginReducer';
import PostReducer from './PostReducer/PostReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    LoginReducer, PostReducer
})
export default rootReducer