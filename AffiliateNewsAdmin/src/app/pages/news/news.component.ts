import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { DeleteNewsComponent } from './components/delete-news/delete-news.component';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginatorFiltered: MatPaginator;

  newsList: any;
  dataSource: any;
  displayedColumns = [
    'title',
    'category',
    'image',
    'content',
    'postDay',
    'action',
  ];

  constructor(
    public dialog: MatDialog,
    public newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getNewsList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getNewsList() {
    this.newsService.getNewsList().subscribe(res => {
      this.newsList = res.reverse();
      console.log('newsList', this.newsList);
      this.dataSource = new MatTableDataSource(this.newsList);
      this.dataSource.paginator = this.paginator;
    })
  }

  createNews() {
    this.dialog.open(CreateNewsComponent).afterClosed().subscribe(() => {
      this.getNewsList();
    });
  }

  editNews(notificationId: number) {
    this.dialog.open(EditNewsComponent, {
      data: {
        notificationId: notificationId
      }
    }).afterClosed().subscribe(() => {
      this.getNewsList();
    });
  }

  deleteNews(notificationId: number) {
    this.dialog.open(DeleteNewsComponent, {
      data: {
        notificationId: notificationId
      }
    }).afterClosed().subscribe(() => {
      this.getNewsList();
    });
  }

}
