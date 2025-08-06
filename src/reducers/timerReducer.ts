import type { TimerAction, TimerState } from '../types';

export const timerReducer = (state: TimerState, action: TimerAction): TimerState => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        status: 'running' 
      };
    case 'PAUSE':
      return {
        ...state,
        status: 'paused' 
      };
    case 'RESET':
      return {
        ...state,
        status: 'new' ,
        timeLeft: action.timeLeft
      };
    case 'TICK':
      return {
        ...state,
        timeLeft: state.timeLeft > 0 ? state.timeLeft - 1 : 0,
        status: state.timeLeft > 0 ? state.status : 'finished' 
      };
    case 'SWITCH_MODE':
      return {
        ...state,
        mode: action.mode,
        timeLeft: action.timeLeft,
        status: 'paused' 
      };
    default:
      return state;
  }
};