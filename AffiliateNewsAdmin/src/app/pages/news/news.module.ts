import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { DeleteNewsComponent } from './components/delete-news/delete-news.component';
import { NewsCategoriesComponent } from './components/news-categories/news-categories.component';
import { CreateCategoryComponent } from './components/news-categories/create-category/create-category.component';
import { EditCategoryComponent } from './components/news-categories/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './components/news-categories/delete-category/delete-category.component';



@NgModule({
  declarations: [NewsComponent, CreateNewsComponent, EditNewsComponent, DeleteNewsComponent, NewsCategoriesComponent, CreateCategoryComponent, EditCategoryComponent, DeleteCategoryComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ]
})
export class NewsModule { }
