import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-dateDetails',
  templateUrl: './dateDetails.component.html',
  styleUrls: ['./dateDetails.component.css']
})
export class DateDetailsComponent implements OnInit, OnChanges {
  @Input("date") date;

  title;
  constructor(private modalCtrl: ModalController) { }
  
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
    console.log({d: this.date});
    moment.locale('hi');
    this.title = moment(this.date, 'DD-MM-YYYY').format('DD, MMMM YYYY (dddd)');
    
  }

  closeModal() {
    this.modalCtrl.dismiss()
  }

}
