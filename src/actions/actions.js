import { loadListAPI, upvoteAPI, downvoteAPI} from '../api/fetchUtil';

export const LOAD_LIST = 'LOAD_LIST';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';

export const loadList =  () => async dispatch => {
    const response = await loadListAPI();
    dispatch({
        type : 'LOAD_LIST',
        payload: response
    
    }) 
} 

export const upvote =  (id) => async dispatch => {
    const response = await upvoteAPI(id);
    dispatch({
        type : UPVOTE,
        payload: response 
    }) 
} 

export const downvote =  (id) => async dispatch => {
    const response = await downvoteAPI(id);
    dispatch({
        type : DOWNVOTE,
        payload: response
    
    }) 
} 