import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchModalComponent } from './search-modal/search-modal.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async openSearchModal() {
    const modal = await this.modalCtrl.create({
      component: SearchModalComponent,
      componentProps: {modalId: window.crypto.randomUUID()}
    });
    modal.present();
  }

}
