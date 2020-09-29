import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SeminorService } from "../../../services/seminor.service";

@Component({
  selector: 'app-delete-seminor',
  templateUrl: './delete-seminor.component.html',
  styleUrls: ['./delete-seminor.component.scss']
})
export class DeleteSeminorComponent implements OnInit {
  

  constructor(
    public dialogRef: MatDialogRef<DeleteSeminorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public seminorService: SeminorService 
  ) { }

  seminorId: number;
  
  ngOnInit(): void {
  }


  closeDialog(): void {
    this.dialogRef.close();
  }

  deleteSeminor() {
    this.seminorService.deleteSeminor(this.data.NotificationId).subscribe(res => {
      this.closeDialog();
    })
  }
}
