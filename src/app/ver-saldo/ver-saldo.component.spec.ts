import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSaldoComponent } from './ver-saldo.component';

describe('VerSaldoComponent', () => {
  let component: VerSaldoComponent;
  let fixture: ComponentFixture<VerSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerSaldoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
