import { ADD_UP_VOTE } from "./actions";
import { ADD_DOWN_VOTE } from "./actions";

import { memesData } from "./states";

export const reducer = (
  prevState = {memesData,
  }, action) => {
  const memes = [...prevState.memesData];
  console.log(memes);

  switch (action.type) {
    case ADD_UP_VOTE: {
      const newState = memes.map((meme) => {
        if (meme.id === action.payload.id) {
          return (meme = {
            ...meme,
            upvote: action.payload.upvote,
          });
        }
        return meme;
      });
      return {
        newState,
      };
    }
    case ADD_DOWN_VOTE: {
      const newState = memes.map((meme) => {
        if (meme.id === action.payload.id) {
          return (meme = {
            ...meme,
            downvote: action.payload.downvote,
          });
        }
        return meme;
      });
      return {
        newState,
      };
    }
    default:
      return prevState;
  }
};
