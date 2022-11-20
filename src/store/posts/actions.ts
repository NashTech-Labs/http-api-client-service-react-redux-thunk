// import { ThunkExtraArguments } from "../../utilities/createThunkExtraArguments";
import { ThunkResult } from "../types";
import { FetchPostsRequest, ActionTypes, FetchPostsSuccess, FetchPostsFailure, AddPostSuccess, AddPostRequest, AddPostFailure } from "./types";

export function fetchPosts(): ThunkResult<Promise<void>> {
    return async (dispatch, getState, extra) => {
        dispatch<FetchPostsRequest>({
            type: ActionTypes.FETCH_POSTS_REQUEST,
        })
        
      const result = await extra.api(getState()).postsResource.get();

      if (result.ok) {
        dispatch<FetchPostsSuccess>({
          type: ActionTypes.FETCH_POSTS_SUCCESS,
          payload: result.body,
        });
  
        return Promise.resolve();
      }
  
      const error: Error = await result.body
  
      dispatch<FetchPostsFailure>({
        type: ActionTypes.FETCH_POSTS_FAILURE,
        payload: [error],
      });
  
      return Promise.reject();
    };
}
  
export function addPost(post: { title: string, body: string}): ThunkResult<Promise<void>> {
    return async (dispatch, getState, extra) => {
        dispatch<AddPostRequest>({
          type: ActionTypes.ADD_POST_REQUEST,
        })

      const userId = getState().user.id;
      console.log(post)
        
      const result = await extra.api(getState()).postsResource.post({ ...post, userId});

      if (result.ok) {
        dispatch<AddPostSuccess>({
          type: ActionTypes.ADD_POST_SUCCESS,
          payload: result.body,
        });
  
        return Promise.resolve();
      }
  
      const error: Error = await result.body
  
      dispatch<AddPostFailure>({
        type: ActionTypes.ADD_POST_FAILURE,
        payload: [error],
      });
  
      return Promise.reject();
    };
  }
  