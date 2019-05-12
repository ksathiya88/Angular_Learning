import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HighlightDirective } from './highlight.directive';
import { DecoratePipe } from './decorate.pipe';
import { AppHeaderDirective } from './app-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HighlightDirective,
    DecoratePipe,
    AppHeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
