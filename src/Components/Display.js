import React from 'react';
import { useSelector } from 'react-redux';
  

export default function Display(){
    const state = useSelector((state)=>{
                console.log('Value :' ,state.value);
                   return state.value
    }) 
  return(

      <>
       <h1>Value : {state}</h1>
      </>
  );
}