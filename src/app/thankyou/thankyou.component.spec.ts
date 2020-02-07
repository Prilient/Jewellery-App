import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ThankyouComponent } from './thankyou.component';

describe('ThankyouComponent', () => {
  let component: ThankyouComponent;
  let fixture: ComponentFixture<ThankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
