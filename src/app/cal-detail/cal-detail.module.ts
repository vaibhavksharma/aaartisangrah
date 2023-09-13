import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalDetailPageRoutingModule } from './cal-detail-routing.module';

import { CalDetailPage } from './cal-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalDetailPageRoutingModule
  ],
  declarations: [CalDetailPage]
})
export class CalDetailPageModule {}
