import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DispUsersComponent } from './disp-users/disp-users.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'newUser', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path : 'dispUser', component: DispUsersComponent},
  { path : 'info', component: InfoComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
