import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalenderPageRoutingModule } from './calender-routing.module';

import { CalenderPage } from './calender.page';
import { DateDetailsComponent } from './dateDetails/dateDetails.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarService } from './calendar.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CalenderPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CalenderPage, DateDetailsComponent],
  providers: [CalendarService]
})
export class CalenderPageModule {}
