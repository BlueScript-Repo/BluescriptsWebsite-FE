import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerpageComponent } from './carrerpage.component';

describe('CarrerpageComponent', () => {
  let component: CarrerpageComponent;
  let fixture: ComponentFixture<CarrerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrerpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
