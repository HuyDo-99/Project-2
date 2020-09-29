import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../services/login.service";
import { Router } from '@angular/router';
import { AlertService } from '../../../../shared/services/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  pwd: string = '';
  fullName = '';
  error: any;

  constructor(
    private alertService: AlertService,
    private loginService: LoginService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.userName, this.pwd).subscribe((data: any) => {
      this.fullName = data.FullName;
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('access_user', JSON.stringify(data));
      this.router.navigateByUrl('/pages/check-in');
    }, (err) => {
      this.error = err;
    }, () => this.alertService.changeMessage({
      color: 'green',
      text: `Xin chào ${this.fullName}`
    }));
  }

  forgotPassword() {
    this.dialog.open(ForgotPasswordComponent);
  }


}
