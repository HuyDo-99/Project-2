import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-delete-news',
  templateUrl: './delete-news.component.html',
  styleUrls: ['./delete-news.component.scss']
})
export class DeleteNewsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public newsService: NewsService
  ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  deleteNews() {
    this.newsService.delete(this.data.notificationId).subscribe(res => {
      this.closeDialog();
    })
  }

}
