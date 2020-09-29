import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsModel } from '../../models/news.model';
import { NewsService } from '../../services/news.service';
import { AlertService } from '../../../../shared/services/alert.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {
  postImage: any;
  name: string;
  description: string;
  categoryId: number;
  categories: any;

  constructor(
    public dialogRef: MatDialogRef<CreateNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public newsService: NewsService,
    public alertService: AlertService,
    public categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getCategoryList();
    }, 0);

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  processPostImage(files: File) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.postImage = reader.result;
    };
  }

  getCategoryList() {
    this.categoryService.list().subscribe(res => {
      this.categories = res;
    })
  }

  chooseCategory(categoryId) {
    this.categoryId = categoryId;
    console.log(this.categoryId);

  }

  createNews() {
    let newsModel = new NewsModel();
    newsModel.Name = this.name;
    newsModel.CategoryId = this.categoryId;
    newsModel.Description = this.description;
    newsModel.ImageUrl = this.postImage.split(",")[1];
    this.newsService.create(newsModel).subscribe(res => {
      this.alertService.changeMessage({
        text: 'Tạo bài viết thành công',
        color: 'green'
      });
      this.closeDialog();
    })
  }



}
