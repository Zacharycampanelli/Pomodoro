import type { SettingsState, TimeMode, TimerState } from '../types';
// useTimer.ts - Logic layer remains UI-independent
import { useCallback, useEffect, useReducer, useRef } from 'react';

// import { playNotification } from '../utils/audio';
// import { showBrowserNotification } from '../utils/notifications';
import { timerReducer } from '../reducers/timerReducer';

interface UseTimerProps {
  settings: SettingsState;
  onTimerComplete: (mode: TimeMode) => void;
}
export const useTimer = ({ settings, onTimerComplete }: UseTimerProps) => {
  const initialState: TimerState = {
    timeLeft: settings.pomodoro,
    status: 'paused',
    mode: 'pomodoro',
    sessions: 0,
    totalSessions: 0
  };

  const [timerState, dispatch] = useReducer(timerReducer, initialState);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);



  useEffect(() => {
    if (timerState.status === 'running') {
      intervalRef.current = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [timerState.status]);

//   useEffect(() => {
//     if (timerState.status === 'finished') {

//       onTimerComplete(timerState.mode);

//       if (timerState.mode === 'pomodoro') {
//         dispatch({ type: 'INCREMENT_SESSION' });
//       }

//       if (settings.autoStart) {
//         setTimeout(() => {
//           const nextMode = getNextMode();
//           dispatch({ type: 'SWITCH_MODE', mode: nextMode, timeLeft: settings[nextMode] });
//           dispatch({ type: 'START' });
//         }, 2000);
//       }
//     }
//   }, [timerState.status, timerState.mode, settings, getNextMode, onTimerComplete]);

  const toggleTimer = () => {
    if (timerState.status === 'running') {
      dispatch({ type: 'PAUSE' });
    } else {
      dispatch({ type: 'START' });
    }
  };

  const resetTimer = () => {
    dispatch({ type: 'RESET', timeLeft: settings[timerState.mode] });
  };

  const switchMode = (mode: TimeMode) => {
    dispatch({ type: 'SWITCH_MODE', mode, timeLeft: settings[mode] });
  };

  return {
    timerState,
    toggleTimer,
    resetTimer,
    switchMode,
    dispatch
  };
};
