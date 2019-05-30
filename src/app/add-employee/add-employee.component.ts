import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
   public name:string;
   public dob:Date; 
   public position_held:string;

   @Output() refresh:EventEmitter<string> = new EventEmitter<string>();

  constructor(private httpService: HttpServiceService,private router:Router) { }

  ngOnInit() {
  }

  submit(){
    
    this.httpService.addEmployee(this.name,
      this.dob,this.position_held)
      .subscribe((data)=>{
          console.log("data",data);
         // this.refresh.emit("added");
         this.router.navigate(['employeeList']);
      });
  }

}
