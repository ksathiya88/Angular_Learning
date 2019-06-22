import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {

  loginForm: FormGroup;
  error: boolean;

  constructor(private authenticationService: AuthenticationService, public router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    });
  }

  onSubmit() {
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
    // .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['home', 'employeeList']);
        },
        error => {
          this.error = error;
          // this.loading = false;
        });
  }


}
