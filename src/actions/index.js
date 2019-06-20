import jsonPlaceholder from './jsonPlaceholder';
import _ from 'lodash';

//if no async await, use promise instead of response, bcause we its gonna take time
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //we call an action creator inside action creater so need to make sure we dispatch the result 
    
    await dispatch(fetchPosts());
    //async to wait before continuing
   const userIds= _.uniq(_.map(getState().posts, 'userId'));
console.log(userIds);
userIds.forEach(id=>dispatch(fetchUser(id)));

};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');


    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


/* export const fetchUser = (id) => dispatch => {

    _fetchUser(id, dispatch);
};


//memoized option but we wont be able to update user cause only runs once

const _fetchUser = _.memoize(async (id, dispatch) => {

    const response = await jsonPlaceholder.get(`/users/${id}`);


    dispatch({ type: 'FETCH_USER', payload: response.data });
}); */

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};










