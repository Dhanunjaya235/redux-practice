
import { Decrement_Counter, Increment_Counter, Reset_Counter } from "../types/counter_types";

export interface CounterState {
    counter: number;
}

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Increment_Counter:
            return {
                counter: state.counter + 1
            };
        case Decrement_Counter:
            return {
                counter: state.counter - 1
            };
        case Reset_Counter:
            return {
                 counter: 0
            }
        default:
            return state;
    }
};

export default counterReducer;