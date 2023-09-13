import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'list/:id',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'chalisa-list',
    loadChildren: () => import('./chalisa-list/chalisa-list.module').then( m => m.ChalisaListPageModule)
  },
  {
    path: 'chalisa-details',
    loadChildren: () => import('./chalisa-details/chalisa-details.module').then( m => m.ChalisaDetailsPageModule)
  },
  {
    path: 'sundarkand',
    loadChildren: () => import('./sundarkand/sundarkand.module').then( m => m.SundarkandPageModule)
  },
  {
    path: 'sundarkandbhag1',
    loadChildren: () => import('./sundarkandbhag1/sundarkandbhag1.module').then( m => m.Sundarkandbhag1PageModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('./calender/calender.module').then( m => m.CalenderPageModule)
  },
  {
    path: 'cal-detail',
    loadChildren: () => import('./cal-detail/cal-detail.module').then( m => m.CalDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
