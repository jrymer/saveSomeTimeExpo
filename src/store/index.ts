import { createStore, combineReducers } from 'redux';
import stopwatchReducer from './stopwatchState/stopwatch.reducer';

const rootReducer = combineReducers({
  stopwatchState: stopwatchReducer
});

export type AppState = ReturnType<typeof rootReducer>;
