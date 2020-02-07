import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Intro2Component } from './intro2.component';

describe('Intro2Component', () => {
  let component: Intro2Component;
  let fixture: ComponentFixture<Intro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Intro2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
       imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Intro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
