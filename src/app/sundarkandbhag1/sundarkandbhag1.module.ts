import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sundarkandbhag1PageRoutingModule } from './sundarkandbhag1-routing.module';

import { Sundarkandbhag1Page } from './sundarkandbhag1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sundarkandbhag1PageRoutingModule
  ],
  declarations: [Sundarkandbhag1Page]
})
export class Sundarkandbhag1PageModule {}
