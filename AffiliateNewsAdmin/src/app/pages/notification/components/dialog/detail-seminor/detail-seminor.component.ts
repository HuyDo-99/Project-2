import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-detail-seminor',
  templateUrl: './detail-seminor.component.html',
  styleUrls: ['./detail-seminor.component.scss']
})
export class DetailSeminorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetailSeminorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  imageSeminorString: any;
  ngOnInit(): void {
  }

  processFileSeminorImage(files: File) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imageSeminorString = reader.result;
    };
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
