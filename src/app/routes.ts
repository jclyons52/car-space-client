import { UserComponent } from './user/user.component';
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

export const appRoutes: Routes = [
    { path: 'user/:id', component: UserComponent },
    { path: '**', component: UsersComponent },
  ];
