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
        path: 'home',
        loadChildren: () => import('./home/home.module')
          .then(m => m.HomeModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module')
          .then(m => m.CalendarModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./news/news.module')
          .then(m => m.NewsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module')
          .then(m => m.ProfileModule)
      },
      
      {
        path: '',
        redirectTo: 'home',
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
