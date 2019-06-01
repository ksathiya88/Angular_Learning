import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  error: boolean;
  constructor(public httpService: HttpServiceService, public router: Router) { }

  ngOnInit() {

  }

  authenticate() {
    this.httpService.authenticate(this.username, this.password).subscribe(
      (request) => {
        this.error = false;
        this.router.navigate(["home", "employeeList"])
      },
      (error) => {
        console.log("error", error);
        this.error = true;
      },
      (complete) => {
        console.log("complete", complete);
      }
    );
  }



}
