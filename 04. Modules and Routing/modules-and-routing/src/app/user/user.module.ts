import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailResolver } from './user-details/user-details.resolver';
import { AuthGuard } from './user-details/user-details.guard';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user/list',
        component: UserListComponent,
      },
      {
        path: 'user/details/:id',
        resolve: { user: UserDetailResolver},
        canActivate: [AuthGuard],
        component: UserDetailsComponent,
      }    
    ]),
    
  ],
  exports: [UserListComponent],
})
export class UserModule {}
