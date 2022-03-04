import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DispUsersComponent } from './disp-users/disp-users.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  { path: 'newUser', component: AddUserComponent,canActivate : [AuthguardService] },
  { path: 'login', component: LoginComponent },
  { path : 'dispUser', component: DispUsersComponent,canActivate : [AuthguardService]},
  { path : 'info', component: InfoComponent,canActivate : [AuthguardService]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
