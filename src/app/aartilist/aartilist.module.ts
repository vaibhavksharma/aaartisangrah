import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AartilistPageRoutingModule } from './aartilist-routing.module';

import { AartilistPage } from './aartilist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AartilistPageRoutingModule,
	HttpClientModule
  ],
  declarations: [AartilistPage]
})
export class AartilistPageModule {}
