import {LOAD_LIST, UPVOTE, DOWNVOTE} from '../actions/actions';

export default (state = {}, action) => {
    switch(action.type) {
        case LOAD_LIST :
            return {...state, list : action.payload};
        case UPVOTE :
            return {...state, list : action.payload};
        case DOWNVOTE :
            return {...state, list : action.payload};
        default:
            return state;
    }
}