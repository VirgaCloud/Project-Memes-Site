import { useEffect } from 'react';

export const ShowCount = (props) => {

useEffect(()=>{
    console.log('effect');
},[]);


    return <div class="opinion">{props.count}</div>
    
}