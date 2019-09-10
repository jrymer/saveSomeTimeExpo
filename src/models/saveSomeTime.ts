export interface IAction {
  type: string;
  payload: any;
}

export interface IStopwatchState {
  stopwatchRunning: boolean;
  stopwatchTime: number;
}