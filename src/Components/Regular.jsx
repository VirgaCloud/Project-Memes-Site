import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { Memslist } from "./Memslist";

export const Regular = () => {
  const history = useHistory();
  const navigateBack = () => {
    history.goBack();
  };

  const memes = useSelector((state) => state.memesData);

  return (
    <>
      <div>
        <hr></hr>
        <h2>REGULAR MEMS</h2>
        <Memslist array={memes} />
        <hr></hr>
        <Button variant="outlined" class="back-nav" onClick={navigateBack}>
          Back
        </Button>
      </div>
    </>
  );
};
