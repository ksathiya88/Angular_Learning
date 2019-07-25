import { Component, OnInit } from "@angular/core";
import { EmployeeServiceService } from "../../api/employee/employee-service.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../../services";

/**
 * Written by karthik on 11-06-2019
 * Provides the Login Page for the Application
 * loaded when the user enters 'login' in the url
 */

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  error: boolean;

  constructor(
    public httpService: EmployeeServiceService,
    public route: ActivatedRoute,
    public router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    console.log("routeValue", this.route.snapshot.params.key);
    console.log("routeValue1", this.route.snapshot.fragment);
    console.log("routeValue222", this.route.snapshot.queryParams);
  }

  onSubmit(form) {
    console.log("template Model", form);
    console.log("routeValue", this.route.snapshot.params.key);
    console.log("routeValue1", this.route.snapshot.fragment);
    console.log("routeValue222", this.route.snapshot.queryParams);

    this.authenticationService
      .login(form.value.username, form.value.password)
      // .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["home", "employeeList"]);
        },
        error => {
          this.error = error;
          // this.loading = false;
        }
      );
  }
}
