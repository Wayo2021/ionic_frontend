import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Redeem2Page } from './redeem2.page';

describe('Redeem2Page', () => {
  let component: Redeem2Page;
  let fixture: ComponentFixture<Redeem2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Redeem2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Redeem2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
