import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = { 
    filter: ''
 };

 export const searchRobots = (state = initialState, {type, payload} = {}) => {
    switch (type) {
        case CHANGE_SEARCH_FIELD:
            return { filter: payload };
        default:
            return state;
    }
 };