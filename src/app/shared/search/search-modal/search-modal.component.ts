import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IonInput, IonSearchbar, ModalController } from '@ionic/angular';
import { SearchService } from '../search.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import * as Sanscript from 'sanscript';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent implements OnInit, OnChanges {

  @Input("modalId") modalId;
  // @ViewChild('searchInput', {static: false, read: ElementRef}) ionInput: ElementRef<IonSearchbar>;
  @ViewChild('searchInput', { static: false, read: ElementRef }) searchInput: ElementRef<IonSearchbar>;

  $searchResult;

  convertedValue = "";

  constructor(
    private modalCtrl: ModalController,
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.modalId);

  }

  ngAfterViewInit(): void {
    this._setFocusOnInput();
  }

  async ngOnInit() {


  }


  handleChange(val) {
    if (val !== '') {
      this.convertedValue = Sanscript.t(val.detail.value, 'itrans', 'devanagari');
      this.$searchResult = this.searchService.search(this.convertedValue);
    }
  }

  onCancel() {
    this.modalCtrl.dismiss()
  }

  onItemClick(itemSelected) {
    this.modalCtrl.dismiss();
    this.router.navigateByUrl(`/aartidetails/${itemSelected.id}`)
  }

  private _setFocusOnInput() {

    setTimeout(() => {
      this.searchInput.nativeElement.setFocus();
      
      
    }, 500);
  }
}
