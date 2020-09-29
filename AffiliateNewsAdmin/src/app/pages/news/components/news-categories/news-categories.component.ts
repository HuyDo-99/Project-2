import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../../services/category.service';

//dialog component
import { CreateCategoryComponent } from './create-category/create-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';

@Component({
  selector: 'app-news-categories',
  templateUrl: './news-categories.component.html',
  styleUrls: ['./news-categories.component.scss']
})
export class NewsCategoriesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginatorFiltered: MatPaginator;
  dataSource: any;
  displayedColumns = [
    'name',
    'description',
    'action',
  ];
  categories: any;

  constructor(
    public dialog: MatDialog,
    public categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getCategoryList() {
    this.categoryService.list().subscribe(res => {
      this.categories = res;
      this.dataSource = new MatTableDataSource(this.categories);
      this.dataSource.paginator = this.paginator;
    })
  }

  createCategory() {
    this.dialog.open(CreateCategoryComponent).afterClosed().subscribe(() => {
      this.getCategoryList();
    });
  }

  editCategory(categoryId: number) {
    this.dialog.open(EditCategoryComponent, {
      data: {
        categoryId: categoryId
      }
    }).afterClosed().subscribe(() => {
      this.getCategoryList();
    });
  }

  deleteCategory(categoryId: number) {
    this.dialog.open(DeleteCategoryComponent, {
      data: {
        categoryId: categoryId
      }
    }).afterClosed().subscribe(() => {
      this.getCategoryList();
    });
  }

}
