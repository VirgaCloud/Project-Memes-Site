// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesome } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addUpVote } from "../redux/actions";
import { addDownVote } from "../redux/actions";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";

export const Memslist = () => {
  const dispatch = useDispatch();
  const memes = useSelector((state) => state.memesData);

  console.log(memes);

  const element = (array) =>
    array.map(({ img, upvote, downvote, id, title }) => {
      return (
        <li key={id}>
          <div>
            <div className="box">
              <img className="wrap" src={img} alt="mem"/>
            </div>
            <div className="memTitle">{title}</div>
            <button
              className="opinion_btn" onClick={() => dispatch(addUpVote({ upvote, id }))}> upvote </button>
            <span> {upvote} </span>
            <button className="opinion_btn" onClick={() => dispatch(addDownVote({ downvote, id }))}> downvote </button>
            <span> {downvote} </span>
          </div>
        </li>
      );
    });

  return <List>{element(memes)}</List>;
};

