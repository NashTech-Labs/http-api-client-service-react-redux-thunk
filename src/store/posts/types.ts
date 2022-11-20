import { DataState } from "../types";

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export type State = DataState<Post[]>;

export enum ActionTypes {
    FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE',
    ADD_POST_REQUEST = 'ADD_POST_REQUEST',
    ADD_POST_SUCCESS = 'ADD_POSTS_SUCCESS',
    ADD_POST_FAILURE = 'ADD_POSTS_FAILURE',
}

export interface FetchPostsRequest {
    type: ActionTypes.FETCH_POSTS_REQUEST
}

export interface FetchPostsSuccess {
    type: ActionTypes.FETCH_POSTS_SUCCESS,
    payload: Post[],
}

export interface FetchPostsFailure {
    type: ActionTypes.FETCH_POSTS_FAILURE
    payload: Error[],
}

export interface AddPostRequest {
    type: ActionTypes.ADD_POST_REQUEST
}

export interface AddPostSuccess {
    type: ActionTypes.ADD_POST_SUCCESS
    payload: Post,
}

export interface AddPostFailure {
    type: ActionTypes.ADD_POST_FAILURE
    payload: Error[],
}

export type Actions = FetchPostsRequest | AddPostRequest | AddPostSuccess | AddPostFailure | FetchPostsFailure | FetchPostsSuccess