import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailResolver } from './user-details/user-details.resolver';

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
        resolve: { user: UserDetailResolver },
        component: UserDetailsComponent,
      }
      
    ]),
    
  ],
  exports: [UserListComponent],
})
export class UserModule {}
