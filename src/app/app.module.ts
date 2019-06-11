import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {HighlightDirective} from './pipes/highlight.directive';
import {AppHeaderDirective} from './directives/app-header.directive';
import {EmployeeComponent} from './components/employee/employee.component';
import {FormsModule} from '@angular/forms';
import {Decorate} from './pipes/decorate.pipe';
import {FilternamePipe} from './pipes/filtername.pipe';
import {SortnamePipe} from './pipes/sortname.pipe';
import {AddEmployeeComponent} from './components/add-employee/add-employee.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {LogoutComponent} from './components/logout/logout.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},

  {
    path: 'home', component: HomeComponent, children: [
      {path: 'employeeList', component: EmployeeListComponent},
      {path: 'addEmployee', component: AddEmployeeComponent},
      {path: 'employee/key', component: EmployeeComponent},
      {path: 'logout', component: LogoutComponent},
      {path: '**', component: PageNotFoundComponent}]
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
