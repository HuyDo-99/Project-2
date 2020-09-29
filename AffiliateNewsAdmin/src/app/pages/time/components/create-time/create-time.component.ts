import { Component, OnInit } from '@angular/core';
import { CreateSeminorComponent } from 'src/app/pages/notification/components/dialog/create-seminor/create-seminor.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-time',
  templateUrl: './create-time.component.html',
  styleUrls: ['./create-time.component.scss']
})
export class CreateTimeComponent implements OnInit {
  

  constructor(
    public dialogRef: MatDialogRef<CreateSeminorComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
