import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createThunkExtraArgs from '../utilities/createThunkExtraArguments';
import rootReducer from "./rootReducer";

export default function configureStore(preloadedState?: { posts: undefined, user: { token: 'token', id: 101 } }) { 
    const thunkWithExtraArgument = thunk.withExtraArgument(createThunkExtraArgs());

    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
          applyMiddleware(thunkWithExtraArgument),
        ),
      );
    
      return store;
}