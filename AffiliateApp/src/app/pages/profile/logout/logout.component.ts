import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<LogoutComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }

  logout() {
    localStorage.clear();
    setTimeout(() => {
      this.router.navigateByUrl('/login');
      this.closeDialog();
    }, 200);
  }

}
