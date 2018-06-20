import { Action } from 'redux';
import { CounterActions } from './app/app.actions';

export interface UserState {
  author : string;
  questions: any;
}

export const INITIAL_STATE: UserState = {
  'author' :  '',
  'questions' : []
};

export function rootReducer(lastState: UserState, action: Action): UserState {
  switch(action.type) {
    case CounterActions.INCREMENT:
      return {
        'author' :  'Artur',
        'questions' : [{}]
      };
    case CounterActions.DECREMENT:
      return {
        'author' :  'Vitold',
        'questions' : [{}]
      };
  }

  // We don't care about any other actions right now.
  return lastState;
}
