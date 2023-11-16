import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes: Routes = [
  {
    path: 'themes',
    children: [
        {
            path: '',
            pathMatch: 'full',
            component: MainComponent
        },
        {
            path: ':themeId',
            component: CurrentThemeComponent,
        }
    ]
  },

  {
    path: 'add-theme', 
    component: NewThemeComponent,
    canActivate: [AuthActivate]
  },
  {
    path: '**', component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
