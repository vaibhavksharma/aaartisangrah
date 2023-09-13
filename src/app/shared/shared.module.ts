import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchModalComponent } from './search/search-modal/search-modal.component';
import { SearchService } from './search/search.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SearchComponent,
    SearchModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SearchComponent
  ],
  providers: [
    SearchService
  ]
})
export class SharedModule { }
