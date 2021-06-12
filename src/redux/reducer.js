import {
    ADD_UP_VOTE
} from "./actions";

import {
    memesData
} from "./states";

export const reducer = (prevState = {
    memesData
}, action) => {


    switch (action.type) {
        case ADD_UP_VOTE: {
            return prevState.map((meme) => {
                if (meme.id === action.payload.id) {
                    return (meme = {
                        ...meme,
                        upvote: action.payload.upvote,
                    });
                }
                return meme;
            });
                

        }
    }
}