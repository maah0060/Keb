import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoendeComponent } from './boende.component';

describe('BoendeComponent', () => {
  let component: BoendeComponent;
  let fixture: ComponentFixture<BoendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoendeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
