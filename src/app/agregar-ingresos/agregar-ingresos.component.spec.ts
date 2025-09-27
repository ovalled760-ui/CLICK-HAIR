import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AgregarIngresosComponent } from './agregar-ingresos.component';

describe('IngresosComponent', () => {
  let component: AgregarIngresosComponent;
  let fixture: ComponentFixture<AgregarIngresosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarIngresosComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});