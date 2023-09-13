import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChalisaDetailsPageRoutingModule } from './chalisa-details-routing.module';

import { ChalisaDetailsPage } from './chalisa-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChalisaDetailsPageRoutingModule
  ],
  declarations: [ChalisaDetailsPage]
})
export class ChalisaDetailsPageModule {}
