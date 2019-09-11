import { createStore, combineReducers } from 'redux';
import { stopwatchReducer, initialStopwatchState } from './stopwatchState/stopwatch.reducer';

const rootReducer = combineReducers({
  stopwatchState: stopwatchReducer
});

const initialRootState = {
  stopwatchState: initialStopwatchState
};

export const store = createStore(
  rootReducer,
  initialRootState
);

export type AppState = ReturnType<typeof rootReducer>;
