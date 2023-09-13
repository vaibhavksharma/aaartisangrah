import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sundarkandbhag1Page } from './sundarkandbhag1.page';

const routes: Routes = [
  {
    path: '',
    component: Sundarkandbhag1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sundarkandbhag1PageRoutingModule {}
