import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'news',
        loadChildren: () => import('./news/news.module')
          .then(m => m.NewsModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module')
          .then(m => m.NotificationModule)
      },
      {
        path: 'time',
        loadChildren: () => import('./time/time.module')
          .then(m => m.TimeModule)
      },
      
      {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
