import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForgotPasswordService } from "../../../services/forgot-password.service";
import { AlertService } from "../../../../shared/services/alert.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private forgotpassword:  ForgotPasswordService,
    private alertService: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  email: string;
  ngOnInit(): void {
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
  createforgotpassword () {
    this.forgotpassword.forgotpassword(this.email, []).subscribe(() =>{
      this.alertService.changeMessage({
        text: 'Gửi yêu cầu thành công!',
        color: 'green'
      });
    })
  }
}
