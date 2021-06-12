import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesome } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/react-fontawesome';
// import { CountEffect } from '../classes/effect/CountEffect'
// import { ShowCount } from '../classes/effect/ShowCount';

import { useDispatch } from "react-redux";
import { addUpVote } from "../redux/actions";

import List from "@material-ui/core/List";


export const Memslist = (state) => {
  const dispatch = useDispatch();
  const ooo=[...state];
  console.log(ooo);

  // const Image = props => <img height="450" width="600" border="15" src={props.url}></img>;
  

  

  // const [mems, setMems] = useState(
  //   [
  //     {
  //       id: 1,
  //       title: 'React developers at the end of a sprint', 
  //       img: < Image url="https://cdn.pixabay.com/photo/2018/05/31/15/06/not-hear-3444212_960_720.jpg" />, 
  //       upvote: 0,
  //       downvote: 0, 
  //       favourite: true,
  //     }, 
  //     {
  //       id: 2,
  //       title: 'Is this project nice, profesor?', 
  //       img: < Image url="https://cdn.pixabay.com/photo/2016/11/13/21/46/sheep-1822137_960_720.jpg" />, 
  //       upvote: 0,
  //       downvote: 0, 
  //       favourite: false,
  //     }, 
  //     {
  //       id: 3,
  //       title: 'It could not be better', 
  //       img: < Image url="https://cdn.pixabay.com/photo/2014/06/04/16/58/cigar-362183_960_720.jpg" />, 
  //       upvote: 0,
  //       downvote: 0, 
  //       favourite: true,
  //     },
  //     {
  //       id: 4,
  //       title: 'Tenth hour in front of the screen', 
  //       img: < Image url="https://cdn.pixabay.com/photo/2015/10/12/15/01/cat-984097_960_720.jpg" />, 
  //       upvote: 0,
  //       downvote: 0, 
  //       favourite: false,
  //     }
  //   ]
  // );


const element = (array) => array.map((meme) => {
  
  const upvote=meme.upvote;
  const id = meme.id;
  return(
  <div>
            
  <div className="wrap">  {meme.img} </div>
  <span className=""> {meme.upvote} </span>
  <button className="opinion_btn" onClick={() => dispatch(addUpVote({ upvote, id }))}> downvote</button>
  <span className=""> {meme.downvote} </span>

  </div>)})

    return (
      <List>{element(state)}</List>
          )

     
}

// setMemes({regular: INITIAL_ARRAY, hot: []});
//     const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);