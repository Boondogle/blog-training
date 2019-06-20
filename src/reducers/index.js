import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import postsReducers from './postsReducers';


export default combineReducers({
    posts: postsReducers,
    users:usersReducer
});



