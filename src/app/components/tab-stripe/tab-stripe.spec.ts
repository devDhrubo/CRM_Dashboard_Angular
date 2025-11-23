import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStripe } from './tab-stripe';

describe('TabStripe', () => {
  let component: TabStripe;
  let fixture: ComponentFixture<TabStripe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabStripe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabStripe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
