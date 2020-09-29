import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from '../../../../shared/services/alert.service';
import { NewsService } from '../../services/news.service';
import { NewsModel } from '../../models/news.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {
  postImage: any;
  name: string;
  description: string;
  categoryId: number;
  categories: any;
  newsDetail: any;

  constructor(
    public dialogRef: MatDialogRef<EditNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public newsService: NewsService,
    public alertService: AlertService,
    public categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getNewsDetail();
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

  getNewsDetail() {
    this.newsService.getNewsDetail(this.data.notificationId).subscribe(res => {
      this.newsDetail = res;
      this.name = this.newsDetail.Name;
      this.description = this.newsDetail.Description;
      this.postImage = this.newsDetail.ImageUrl;
      this.categoryId = this.newsDetail.CategoryId;
    })
  }

  editNews() {
    let newsModel = new NewsModel();
    newsModel.Name = this.name;
    newsModel.CategoryId = this.categoryId;
    newsModel.Description = this.description;
    newsModel.ImageUrl = this.postImage.split(",")[1];
    console.log('model', newsModel);
    
    this.newsService.update(newsModel, this.data.notificationId).subscribe(res => {
      this.alertService.changeMessage({
        text: 'Cập nhật tin tức thành công',
        color: 'green'
      });
      this.closeDialog();
    })
  }

}
