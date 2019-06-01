import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HighlightDirective } from './highlight.directive';
import { AppHeaderDirective } from './app-header.directive';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { Decorate } from './decorate.pipe';
import { FilternamePipe } from './filtername.pipe';
import { SortnamePipe } from './sortname.pipe';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'home', component: HomeComponent, children: [
      { path: 'employeeList', component: EmployeeListComponent },
      { path: 'addEmployee', component: AddEmployeeComponent },
      { path: 'employee/key', component: EmployeeComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '**', component: PageNotFoundComponent }]
  }];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HighlightDirective,
    AppHeaderDirective,
    EmployeeComponent,
    Decorate,
    FilternamePipe,
    SortnamePipe,
    AddEmployeeComponent,
    AddEmpComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
