import { ShowCount } from './ShowCount';
import { useState } from 'react';

export const CountEffect = () => {
    const[upvote, setupvote] = useState(0);
    const[downvote, setdownvote] = useState(0);
    const[score, setScore] = useState(0);

    const onIncrement = () => {
        setupvote(upvote + 1)
    };
    const onIncrement2 = () => {
        setdownvote(downvote + 1)
    };

    const theScore = () => {
       setScore(upvote - downvote)
    }

    return(
        <>
        <button class="opinion_btn" onClick={onIncrement}>good :)</button>
        <ShowCount count={upvote} />
        <button class="opinion_btn" onClick={onIncrement2}>week :/</button>
        <ShowCount count={downvote} />
        <button class="opinion_btn" onClick={theScore}> In plus</button>
        <ShowCount count={score} />
        </>
    );
};
