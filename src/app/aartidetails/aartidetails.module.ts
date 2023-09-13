import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { AartidetailsPageRoutingModule } from './aartidetails-routing.module';

import { AartidetailsPage } from './aartidetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AartidetailsPageRoutingModule,
	HttpClientModule
  ],
  declarations: [AartidetailsPage]
})
export class AartidetailsPageModule {}
