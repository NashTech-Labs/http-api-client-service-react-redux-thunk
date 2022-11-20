import { combineReducers } from "redux";
import { reducer as posts } from './posts/index';

const userReducer = () => {
    return {
        token: 'token',
        id: 101
    }
}

const rootReducer = combineReducers({
    posts,
    user: userReducer
})

export default rootReducer;
