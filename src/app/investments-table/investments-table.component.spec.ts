import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsTableComponent } from './investments-table.component';

describe('InvestmentsTableComponent', () => {
  let component: InvestmentsTableComponent;
  let fixture: ComponentFixture<InvestmentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
