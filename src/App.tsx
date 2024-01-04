import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { incrementCounter, decrementCounter,resetCounter } from './actions/actions';
function App() {
  const counter = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
       <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
}

export default App;
