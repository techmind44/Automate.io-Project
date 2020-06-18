import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewnotePage } from './newnote.page';

describe('NewnotePage', () => {
  let component: NewnotePage;
  let fixture: ComponentFixture<NewnotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewnotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewnotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
