

import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import counterReducer, { CounterState } from './reducers/reducer'

export interface RootState {
    counter: CounterState;
}

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;
