import {Component} from '@angular/core';
import {EmployeeServiceService} from './api/employee/employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';


  constructor(private httpService: EmployeeServiceService) {
    this.title = 'My App';
  }
}
