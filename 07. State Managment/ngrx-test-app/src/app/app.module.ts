import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReduxSimulationComponent } from './redux-simulation/redux-simulation.component';
import { StoreModule } from '@ngrx/store';
import { TranslateComponent } from './translate/translate.component';
import { translateReducer } from './translate/translate.reducer';
import { PostComponent } from './post/post.component';
import { postReducer } from './post/post.reducer';
import { FormsModule } from '@angular/forms';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ReduxSimulationComponent,
    TranslateComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({message: translateReducer, post: postReducer as any}),
    //StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()})
    FormsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
