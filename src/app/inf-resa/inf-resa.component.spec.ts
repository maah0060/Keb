import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfResaComponent } from './inf-resa.component';

describe('InfResaComponent', () => {
  let component: InfResaComponent;
  let fixture: ComponentFixture<InfResaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfResaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
