import { combineReducers } from 'redux';
import userReducer from './userReducer';
import surveyReducer from './surveyReducer';

export default combineReducers({
    currentuser: userReducer,
    surveydata: surveyReducer
});