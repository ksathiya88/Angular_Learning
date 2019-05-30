import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  public name:string;
  public dob:Date; 
  public position_held:string;

  @Output() refresh:EventEmitter<string> = new EventEmitter<string>();  
  constructor(public http:HttpServiceService) { }

  ngOnInit(){
    
  }

   submit(){
     this.http.addEmployee(this.name,this.dob,this.position_held).
     subscribe((data)=>{
        this.refresh.emit("refreshed"); 
        console.log("put data",data); 
     }); 
   }

}
