import React from 'react';
import {useDispatch} from "react-redux";


export default function Counter(){
    
    const dispatch = useDispatch();
    
  return(
      <>
          <button onClick={()=>{
                dispatch({type:"Increment"})
          }}>Increment</button> <br/>
          <button onClick={()=>{dispatch({type:"Decrement"})}}
          >Decrement</button>
      </>
  );
}