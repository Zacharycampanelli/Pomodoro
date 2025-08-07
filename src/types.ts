export type TimeMode = 'pomodoro' | 'shortBreak' | 'longBreak';
export type TimerStatus =  'running' | 'paused' | 'finished' | 'new';
export type ColorTheme = 'pinkishRed' | 'lightBlue' | 'purplePink';
export type FontTheme = 'sans' | 'serif' | 'mono';

export interface TimerState {
  timeLeft: number;
  status: TimerStatus;
  mode: TimeMode;
}

export interface SettingsState {
    timeValues: Record<TimeMode, number>;   

  colorTheme: ColorTheme;
  fontTheme: FontTheme;
  mode: TimeMode;
}

export type TimerAction = 
  | { type: 'START' }
  | { type: 'PAUSE' }
  | { type: 'RESET'; timeLeft: number }
  | { type: 'TICK' }
  | { type: 'COMPLETE' }
  | { type: 'SWITCH_MODE'; mode: TimeMode; timeLeft: number }
