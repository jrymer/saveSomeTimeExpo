import { IStopwatchState, IAction } from '../../models/saveSomeTime';
import * as stopwatchTypes from './stopwatch.types';

const initialStopwatchState: IStopwatchState = {
  stopwatchRunning: false,
  stopwatchTime: null
};

const stopwatchReducer = (state = initialStopwatchState, action: IAction): IStopwatchState => {
  switch (action.type) {
    case stopwatchTypes.TOGGLE_STOPWATCH:
    console.log('toggle reducer');
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

export default stopwatchReducer;