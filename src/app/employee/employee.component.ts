import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  @Input() employee:string;
  @Output() delete:EventEmitter<number>= new EventEmitter<number>();

  constructor() { 
    
  }

  ngOnInit() {
    console.log("EmployeeComponent",this.employee);
  }

  deleteFn(key:number){
      this.delete.emit(key);
  }

 
}
