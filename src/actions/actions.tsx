import { Increment_Counter,Decrement_Counter,Reset_Counter } from "../types/counter_types";


export const incrementCounter = () => {
  return {
    type: Increment_Counter
  };
};

export const decrementCounter = () => {
  return {
    type: Decrement_Counter
  };
};

export const resetCounter=()=>{
    return {
        type:Reset_Counter
    };
};

