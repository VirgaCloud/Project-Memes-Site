const Image = props => <img height="450" width="600" border="15" src={props.url}></img>;
  
export const memesData = [

    {
        id: 1,
        title: 'React developers at the end of a sprint', 
        img: < Image url="https://cdn.pixabay.com/photo/2018/05/31/15/06/not-hear-3444212_960_720.jpg" />, 
        upvote: 0,
        downvote: 0, 
        favourite: true
      }, 
      {
        id: 2,
        title: 'Is this project nice, profesor?', 
        img: < Image url="https://cdn.pixabay.com/photo/2016/11/13/21/46/sheep-1822137_960_720.jpg" />, 
        upvote: 0,
        downvote: 0, 
        favourite: true
      }, 
      {
        id: 3,
        title: 'It could not be better', 
        img: < Image url="https://cdn.pixabay.com/photo/2014/06/04/16/58/cigar-362183_960_720.jpg" />, 
        upvote: 0,
        downvote: 0, 
        favourite: true
      },
      {
        id: 4,
        title: 'It could not be better', 
        img: < Image url="https://cdn.pixabay.com/photo/2014/06/04/16/58/cigar-362183_960_720.jpg" />, 
        upvote: 0,
        downvote: 0, 
        favourite: true
      }

]

export default memesData