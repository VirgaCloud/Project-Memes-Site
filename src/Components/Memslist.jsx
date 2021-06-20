import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUpVote } from "../redux/actions";
import { addDownVote } from "../redux/actions";
import List from "@material-ui/core/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Memslist = ({ array }) => {
  const dispatch = useDispatch();

  const [isFavourite, setFavourite] = useState("false");
  const handleToggle = () => {
    setFavourite(!isFavourite);
  };

  const element = (meme) =>
    meme.map(({ img, title, upvote, downvote, id }) => {
      return (
        <li key={id}>
          <div>
            <div className="titleBox">
              <img className="wrap" src={img} alt="mem" />
            </div>
            <div className="memTitle">{title}</div>
            <button
              className="opinion_btn"
              onClick={() => dispatch(addUpVote({ upvote, id }))}>upvote</button>
            <span className=""> {upvote} </span>
            <button
              className="opinion_btn"
              onClick={() => dispatch(addDownVote({ downvote, id }))}>downvote</button>
            <span className=""> {downvote} </span>
            <span className="starFav">
              <span className={isFavourite ? "favourite" : null} onClick={handleToggle}><FontAwesomeIcon icon={["fas", "star"]} /></span>
            </span>
          </div>
        </li>
      );
    });

  return <List>{element(array)}</List>;
};
