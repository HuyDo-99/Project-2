import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryModel } from '../../../models/category.model';
import { CategoryService } from '../../../services/category.service';
import { AlertService } from '../../../../../shared/services/alert.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  name: string;
  description: string;

  constructor(
    public dialogRef: MatDialogRef<EditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public alertService: AlertService,
    public categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  editCategory() {
    let categoryModel = new CategoryModel();
    categoryModel.Name = this.name;
    categoryModel.Description = this.description;
    this.categoryService.update(categoryModel, this.data.categoryId).subscribe(res => {
      this.alertService.changeMessage({
        text: 'Cập nhật thành công',
        color: 'green'
      });
      this.closeDialog();
    });
  }

}
