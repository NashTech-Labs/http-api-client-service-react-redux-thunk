import { RootState } from "../types";
import { State } from "./types";

export const getPostsState = (state: RootState): State => {
    return state.posts;
}