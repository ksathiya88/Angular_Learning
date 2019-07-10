import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../components/login/login.component';
import { LogoutComponent } from '../../components/logout/logout.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const authenticationRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }];


@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(authenticationRoutes)
  ],
  exports: [LoginComponent, LogoutComponent]
})
export class AuthenticationModule { }
