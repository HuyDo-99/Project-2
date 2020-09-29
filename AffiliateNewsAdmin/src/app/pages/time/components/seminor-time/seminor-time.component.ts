import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CreateSeminorComponent } from 'src/app/pages/notification/components/dialog/create-seminor/create-seminor.component';
import { CreateTimeComponent } from "../create-time/create-time.component";

@Component({
  selector: 'app-seminor-time',
  templateUrl: './seminor-time.component.html',
  styleUrls: ['./seminor-time.component.scss']
})
export class SeminorTimeComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    private dialog: MatDialog,
  ) { }
  dataSource: any;
  displayedColumns =[
    'Tiêu đề',
    'Hình ảnh',
    'Nội dung',
    'Thời gian',
    'Tác vụ'
  ];

  ngOnInit(): void {
  }


  openCreateForm() {
    this.dialog.open(CreateTimeComponent , {
      data: {
        
      }
    }).afterClosed().subscribe(() => {
      // this.getListNote();
    });
  }
}
