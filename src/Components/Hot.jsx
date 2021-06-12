import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {Memslist} from "./Memslist"

export const Hot = () => {
    const { id } = useParams();
    const history = useHistory();
  
    const navigateBack = () => {
     history.goBack();
    };
  
    return (
      <div>
        <hr></hr>
        <h2>HOT MEMS {id}</h2>
        <Memslist/>
      <hr></hr>
        <Button variant="outlined" class="back-nav" onClick={navigateBack}>
         Back
        </Button>
      </div>
    );
  };
  
  