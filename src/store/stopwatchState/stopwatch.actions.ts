import * as stopwatchTypes from './stopwatch.types';

export const toggleStopwatchRunning = () => ({
  type: stopwatchTypes.TOGGLE_STOPWATCH
});

export const setStopwatchTime = (time: number) => ({
  type: stopwatchTypes.SET_STOPWATCH_TIME,
  payload: time
});
