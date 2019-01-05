import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpacesComponent } from './car-spaces.component';

describe('CarSpacesComponent', () => {
  let component: CarSpacesComponent;
  let fixture: ComponentFixture<CarSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
