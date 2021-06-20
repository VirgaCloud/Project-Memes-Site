import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { Memslist } from "./Memslist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hot = () => {
  const history = useHistory();
  const navigateBack = () => {
    history.goBack();
  };

  const memes = useSelector((state) => state.memesData);
  const hot = memes.filter(({upvote, downvote}) => upvote - downvote >= 5);
  
  return (
    <div>
      <hr></hr>
      <h2><FontAwesomeIcon icon={["fas", "fire"]} /> HOT MEMS</h2>
      <Memslist array={hot} />
      <hr></hr>
      <div className="backNav">
        <Button variant="outlined" className="back-nav" onClick={navigateBack}>
          Back
        </Button>
      </div>
    </div>
  );
};
