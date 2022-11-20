import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ApiClient } from '../utilities/clients/api';
import { State as PostsState, Actions as PostsActions } from './posts'

export interface DataState<T> {
    data: T | null,
    isLoading: boolean,
    errors?: Error[],
}

export interface RootState {
    posts: PostsState,
    user: {
        token: string,
        id: number,
    }
}

export type Actions = PostsActions

export interface ThunkExtraArguments {
    api: (state: RootState) => ApiClient;
  }
export type ThunkResult<R> = ThunkAction<R, RootState, ThunkExtraArguments, Actions>;
export type ThunkDispatcher = ThunkDispatch<RootState, unknown, Actions>;

