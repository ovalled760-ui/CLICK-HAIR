import { ComponentFixture, TestBed } from '@angular/core/testing';
import { clickcomponent } from './click.component';

describe('clickcomponent', () => {
  let component: clickcomponent;
  let fixture: ComponentFixture<clickcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [clickcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(clickcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase likes', () => {
    const producto = component.productos[0];
    const likesAntes = producto.likes;
    component.toggleLike(producto, new Event('click'));
    expect(producto.likes).toBe(likesAntes + 1);
  });
});
