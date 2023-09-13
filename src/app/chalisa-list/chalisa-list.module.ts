import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChalisaListPageRoutingModule } from './chalisa-list-routing.module';

import { ChalisaListPage } from './chalisa-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChalisaListPageRoutingModule
  ],
  declarations: [ChalisaListPage]
})
export class ChalisaListPageModule {}
