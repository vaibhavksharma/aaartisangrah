import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sundarkandbhag1Page } from './sundarkandbhag1.page';

describe('Sundarkandbhag1Page', () => {
  let component: Sundarkandbhag1Page;
  let fixture: ComponentFixture<Sundarkandbhag1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Sundarkandbhag1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sundarkandbhag1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
