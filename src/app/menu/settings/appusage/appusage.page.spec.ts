import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppusagePage } from './appusage.page';

describe('AppusagePage', () => {
  let component: AppusagePage;
  let fixture: ComponentFixture<AppusagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppusagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppusagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
