import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SundarkandPage } from './sundarkand.page';

const routes: Routes = [
  {
    path: '',
    component: SundarkandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SundarkandPageRoutingModule {}
