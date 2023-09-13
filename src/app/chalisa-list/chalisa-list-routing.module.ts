import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChalisaListPage } from './chalisa-list.page';

const routes: Routes = [
  {
    path: '',
    component: ChalisaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChalisaListPageRoutingModule {}
