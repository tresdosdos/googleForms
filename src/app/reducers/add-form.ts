import { Action } from 'redux';
import {CounterActions} from '../app.actions';

interface IAddForm {
  author: string;
  questions: any;
}

const INITIAL_STATE: IAddForm = {
  'author' :  '',
  'questions' : []
};

export function addForm(state = INITIAL_STATE, action: Action): IAddForm {
  switch (action.type) {
    case CounterActions.INCREMENT: {
      return {
        'author' :  'Artur',
        'questions' : [{}]
      };
    }
    case CounterActions.DECREMENT: {
      return {
        'author' :  'Vitold',
        'questions' : [{}]
      };
    }
  }
}
