import { combineReducers } from 'redux';
import stories from './storiesReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
    stories, users
});

export default rootReducer;