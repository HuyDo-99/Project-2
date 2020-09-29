import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from "../../../../../shared/services/alert.service";
import { SeminorService } from "../../../services/seminor.service";
import { SeminorModel } from "../../../models/seminor.model";

@Component({
  selector: 'app-edit-seminor',
  templateUrl: './edit-seminor.component.html',
  styleUrls: ['./edit-seminor.component.scss']
})
export class EditSeminorComponent implements OnInit {

 

  constructor(
    public dialogRef: MatDialogRef<EditSeminorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public seminorService: SeminorService,
    public alertService: AlertService,

  ) { }
  imageSeminorString: any;
  postImage: any;
  name: string;
  description: string;
  categoryId: number;
  categories: any;
  seminorDetail: any;
  seminorId: number;  
  ngOnInit(): void {
    console.log(this.data.SeminorDetail);
    this.name = this.data.SeminorDetail.Name;
    this.description = this.data.SeminorDetail.Description;
    
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  processFileSeminorImage(files: File) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imageSeminorString = reader.result;
    };
  }

  getSeminorDetail() {
    this.seminorService.getNewsDetail(this.data.seminorId).subscribe(res => {
      this.seminorDetail = res;
      this.name = this.seminorDetail.Name;
      this.description = this.seminorDetail.Description;
      this.postImage = this.seminorDetail.ImageUrl;
      this.categoryId = this.seminorDetail.CategoryId;
    })
  }


  editSeminor() {
    let seminorModel = new  SeminorModel();
    seminorModel.Name = this.name;
    seminorModel.CategoryId = this.categoryId;
    seminorModel.Description = this.description;
    seminorModel.ImageUrl = this.imageSeminorString.split(",")[1];
    seminorModel.Type = 3;
 
    console.log('model', seminorModel);
    
    this.seminorService.updateSeminor(this.data.SeminorDetail.NotificationId, seminorModel).subscribe(res => {
      console.log(res);
      console.log('model', seminorModel);
      this.alertService.changeMessage({
        text: 'Cập nhật tin tức thành công',
        color: 'green'
      });
      this.closeDialog();
    })
  }

}
