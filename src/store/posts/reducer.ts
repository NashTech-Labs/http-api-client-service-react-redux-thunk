import { Actions, ActionTypes, State } from "./types"

const initialState: State = {
    data: null,
    isLoading: false,
}

const reducer = (state = initialState, action: Actions): State => {
    switch (action.type) {
        case ActionTypes.FETCH_POSTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case ActionTypes.FETCH_POSTS_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
                errors: undefined,
            }
        case ActionTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
            }
        case ActionTypes.ADD_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case ActionTypes.ADD_POST_SUCCESS:
            return {
                isLoading: false,
                data: state.data ? [action.payload, ...state.data] : [action.payload],
                errors: undefined,
            }
        case ActionTypes.ADD_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
            }
        default:
            return state
    }
}

export default reducer;
