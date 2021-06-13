import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Memslist } from "./Memslist";

export const Regular = () => {
  const history = useHistory();

  const navigateBack = () => {
    history.goBack();
  };

  return (
    <>
      <div>
        <hr></hr>
        <h2>REGULAR MEMS</h2>
        <Memslist />
        <hr></hr>
        <Button variant="outlined" className="back-nav" onClick={navigateBack}>
          <p>Back</p>
        </Button>
      </div>
    </>
  );
};
