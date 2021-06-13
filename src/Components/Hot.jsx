import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Memslist } from "./Memslist";

export const Hot = () => {
  const history = useHistory();

  const navigateBack = () => {
    history.goBack();
  };

  return (
    <div>
      <hr></hr>
      <h2>HOT MEMS</h2>
      <Memslist />
      <hr></hr>
      <Button variant="outlined" className="back-nav" onClick={navigateBack}>
      <p>Back</p>
      </Button>
    </div>
  );
};
