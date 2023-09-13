import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SundarkandPageRoutingModule } from './sundarkand-routing.module';

import { SundarkandPage } from './sundarkand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SundarkandPageRoutingModule
  ],
  declarations: [SundarkandPage]
})
export class SundarkandPageModule {}
