import { Component, OnInit } from '@angular/core';
import { DeleteServiceService } from '../delete-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:any= [
    {
      "key": 1,
      "name": "ABC",
      "date_of_birth": new Date(1988, 3, 15),
      "position_held": "Senior Lead"
    },
    {
      "key": 2,
      "name": "Sam",
      "date_of_birth": new Date(1988, 3, 15),
      "position_held": "Manager"
    },
    {
      "key": 3,
      "name": "XYZ",
      "date_of_birth": new Date(1988, 3, 15),
      "position_held": "Lead"
    },
    {
      "key": 4,
      "name": "John",
      "date_of_birth": new Date(1988, 3, 15),
      "position_held": "Senior Software Engineer"
    },
    {
      "key": 5,
      "name": "Michael",
      "date_of_birth": new Date(1988, 3, 15),
      "position_held": "Manager"
    },
    {
      "key": 6,
      "name": "Peter",
      "date_of_birth":new Date(1988, 3, 15),
      "position_held": "Engineer"
    }
  ];
  constructor(public deleteService:DeleteServiceService) { }

  ngOnInit() {
    
  }

  deleteEmployee(key:number){
      this.deleteService.delete(this.employees,key);
  }

}
