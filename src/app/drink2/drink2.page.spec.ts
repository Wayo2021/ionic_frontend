import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Drink2Page } from './drink2.page';

describe('Drink2Page', () => {
  let component: Drink2Page;
  let fixture: ComponentFixture<Drink2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Drink2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Drink2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
