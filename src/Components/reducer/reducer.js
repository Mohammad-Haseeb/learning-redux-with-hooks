
const state={
    value:0
};
export  const  reducer=(fullState=state,action)=>{
     console.log( typeof(action.type));
      switch(action.type){
         case "Increment":{
             return {...fullState,value:fullState.value+1}
         }
         case "Decrement":{
              return{...fullState,value:fullState.value-1}
         }
         default:{
             return fullState;
         }
        
      }
}