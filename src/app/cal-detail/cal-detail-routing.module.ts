import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalDetailPage } from './cal-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalDetailPageRoutingModule {}
