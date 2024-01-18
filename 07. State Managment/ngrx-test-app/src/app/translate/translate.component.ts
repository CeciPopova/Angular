import { Component } from '@angular/core';
import { TranslateState } from './translate.type';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {

  message$: Observable<string>;

  constructor(private store: Store<TranslateState>) {
    this.message$ = this.store.select('message')
    
  }

  bulgarianMsg() {

    this.store.dispatch({type: 'BULGARIAN'});
  }

  greekMsg() {

    this.store.dispatch({type: 'GREEK'});

  }
}
