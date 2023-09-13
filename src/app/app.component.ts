import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 constructor(private storage: Storage) {
    this.initStorage(); // Call the initialization method
  }

  async initStorage() {
    // Wait for the storage to be ready
    await this.storage.create();
    console.log('Database is ready.');
  }
}
