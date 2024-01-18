import { Post } from './post.type';
import * as PostAction from './post.actions';

export type Action = PostAction.All;

const dafaultState: Post = {
  text: 'I am defaulth text',
  likes: 0,
};
// helper fnc to combine state

function newState(state: Post, newData: Post) {
  return { ...state, ...newData };
}
export function postReducer(state: Post = dafaultState, action: Action) {
  switch (action.type) {
    case PostAction.EDIT_TEXT:
      return newState(state, { text: action.payload });
    case PostAction.RESET:
      return dafaultState;
    case PostAction.DOWNVOTE:
      return newState(state, {likes: state?.likes !== undefined ? state.likes - 1 : 0 ,});
    case PostAction.UPVOTE:
      return newState(state, {likes: state?.likes !== undefined ? state.likes + 1 : 0 ,});
    default:
      return state;
  }
  console.log(action.type, state);
  return state;
}
