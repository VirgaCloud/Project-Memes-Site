export const ADD_UP_VOTE = "ADD_UP_VOTE";
export const ADD_DOWN_VOTE = "ADD_DOWN_VOTE";

export const addUpVote = ({ upvote, id }) => ({
    type: "ADD_UP_VOTE",
    payload: {
      upvote: upvote + 1,
      id,
    },
  });