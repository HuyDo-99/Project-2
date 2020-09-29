import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SeminorModel } from "../../../models/seminor.model";
import { SeminorService } from "../../../services/seminor.service";
import { AlertService } from 'src/app/shared/services/alert.service';
@Component({
  selector: 'app-create-seminor',
  templateUrl: './create-seminor.component.html',
  styleUrls: ['./create-seminor.component.scss']
})
export class CreateSeminorComponent implements OnInit {
  [x: string]: any;
  postImage: any;
  name: string;
  description: string;
  categoryId: number;
  categories: any;
  datestring : string;
  timestring: string;

  constructor(
    public seminorService :SeminorService,
    public dialogRef: MatDialogRef<CreateSeminorComponent>,
    public alertService: AlertService,
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

  createSeminor(){
    let seminorModel = new SeminorModel();
    seminorModel.Name = this.name;
    seminorModel.Description = this.description;
    seminorModel.ImageUrl = this.imageSeminorString.split(",")[1];
    seminorModel.Type = 3;
    this.seminorService.createSeminor(seminorModel).subscribe((res) => {
      console.log(res);
      console.log('model', seminorModel);
      this.alertService.changeMessage({
        text: 'Tạo bài viết thành công',
        color: 'green'
      });
      this.closeDialog();
    })
    
  }
}
