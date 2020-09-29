import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SeminorService } from "../../services/seminor.service";
//components
import { CreateSeminorComponent } from "../dialog/create-seminor/create-seminor.component";
import { DetailSeminorComponent } from "../dialog/detail-seminor/detail-seminor.component";
import { EditSeminorComponent } from "../../components/dialog/edit-seminor/edit-seminor.component";
import { DeleteSeminorComponent } from "../dialog/delete-seminor/delete-seminor.component";


@Component({
  selector: 'app-seminor',
  templateUrl: './seminor.component.html',
  styleUrls: ['./seminor.component.scss']
})

export class SeminorComponent implements OnInit {
  [x: string]: any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public seminorService: SeminorService
  ) { }
  listSemi : any;
  dataSource: any;
  displayedColumns =[
    'Tiêu đề',
    'Hình ảnh',
    'Nội dung',
    'Thời gian',
    'Ngày diễn ra',
    'Tác vụ'
  ];
  ngOnInit(): void {
    this.getSeminorList();
  }

  openEditForm(id : number) {
    this.dialog.open(DetailSeminorComponent, {
      data: {
        
      }
    }).afterClosed().subscribe(() => {
      // this.getListNote();
    });
  }


  openCreateForm() {
    this.dialog.open(CreateSeminorComponent, {
      data: {
        
      }
    }).afterClosed().subscribe(() => {
      // this.getListNote();
    });
  }

  // getSeminorList(){
  //   this.seminorService.getSeminorList().subscribe(res => {
  //   this.listSemi = res;
  //   console.log(this.listSemi);     
  //   this.dataSource = new MatTableDataSource(this.newsList);
  //   this.dataSource.paginator = this.paginator;
  //   })
  // }

  // getListSeminor(){
  //   this.seminorService.getSeminorList().subscribe(res => {
  //      this.listSemi = res;
  //      this.dataSource = new MatTableDataSource(this.listSemi);
  //      this.dataSource.paginator = this.paginator;
  //      console.log(this.listSemi);
  //   });
  // }

  getSeminorList(){
    this.seminorService.getSeminorList().subscribe(res => {
    this.listSemi = res.reverse();
    this.dataSource = new MatTableDataSource(this.listSemi);
    this.dataSource.paginator = this.paginator;

    console.log(this.listSemi);    
    // this.dataSource = new MatTableDataSource(this.listSemi);
    // this.dataSource.paginator = this.paginator; 
    })
  }


  createNewSeminor() {
    this.dialog.open (CreateSeminorComponent).afterClosed().subscribe(() => {
      this.getSeminorList();
    });
  }

  editSeminor(NotificationId: number) {
    this.dialog.open(EditSeminorComponent, {
      data: {
        SeminorDetail: this.listSemi.find(x => x.NotificationId == NotificationId)
      }
    }).afterClosed().subscribe(() => {
      this.getSeminorList();
    });
  }

  deleteSeminor(NotificationId: number) {
    this.dialog.open(DeleteSeminorComponent, {
      data: {
        NotificationId: NotificationId
      }
    }).afterClosed().subscribe(() => {
      this.getSeminorList();
    });
  }
}


