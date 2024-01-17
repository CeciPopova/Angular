import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux-simulation',
  templateUrl: './redux-simulation.component.html',
  styleUrls: ['./redux-simulation.component.css']
})
export class ReduxSimulationComponent implements OnInit{

    ngOnInit(): void {
      this.demoTest();
    }
  
    demoTest() {
      // Redux? => Drsign Patern => Single source of truth - State
      // how we change state?
      //  * we do no mutate it diectly, we dispatch an action
      // Reducer captures the action and does something
  
  
      //synchronous simulation of redux pattern
      //type of the state
      interface AppState {
  
        str: string;
        obj: any;
        bool: boolean;
      }
  
      //defaulth state
      const initialState: AppState = {
  
        str: '',
        obj: null,
        bool: false,
  
      };
  
      //actions
      const EVENT_ONE = 'EVENT_1';
      const EVENT_TWO = 'EVENT_2';
      const EVENT_THREE = 'EVENT_3';
  
      //reducer
      function reducer(state: AppState, action: any) {
        switch (action.type) {
          case EVENT_ONE:
            return {...state, str: action.value}
            break;
  
            case EVENT_ONE:
              return {...state, obj: action.value}
              break;
  
              case EVENT_ONE:
                return {...state, bool: action.value}
                break;
        
          default:
            return state;
        }
      }
  
      //combine events with reducer and initial state
      const actionsCollection = [
        {type: EVENT_ONE, value: 'test123'},
        {type: EVENT_TWO, value: {name: 'Pesho', age: 21}},
        {type: EVENT_THREE, value: true},
        
      ];
  
      const result = actionsCollection.reduce(reducer, initialState);
  
      console.log(result);
    }
  }
  
