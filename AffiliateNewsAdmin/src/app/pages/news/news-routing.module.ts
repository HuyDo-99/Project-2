import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsCategoriesComponent } from './components/news-categories/news-categories.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: 'category',
    component: NewsCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
