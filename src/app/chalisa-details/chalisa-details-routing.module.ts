import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChalisaDetailsPage } from './chalisa-details.page';

const routes: Routes = [
  {
    path: '',
    component: ChalisaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChalisaDetailsPageRoutingModule {}
