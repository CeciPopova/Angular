import { Action } from "@ngrx/store";


export function translateReducer(state: string = 'Hello!', action: Action) {
  console.log(action.type, state);
  
  switch (action.type) {
    case 'BULGARIAN':
      return (state = 'Zdrasti!');
    case 'GREEK':
      return (state = 'Kalimera!');

    default:
      break;
  }

  return state;
}
