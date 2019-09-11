import { IStopwatchState, IAction } from '../../models/saveSomeTime';
import * as stopwatchTypes from './stopwatch.types';

export const initialStopwatchState: IStopwatchState = {
  stopwatchRunning: false,
  stopwatchTime: null
};

export const stopwatchReducer = (state = initialStopwatchState, action: IAction): IStopwatchState => {
  switch (action.type) {
    case stopwatchTypes.TOGGLE_STOPWATCH:
      return {
        ...state,
        stopwatchRunning: !state.stopwatchRunning
      };
    case stopwatchTypes.SET_STOPWATCH_TIME:
      return {
        ...state,
        stopwatchTime: action.payload
      };
    default:
      return state;
  }
};
