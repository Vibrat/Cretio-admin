import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfoliosComponent } from './porfolios.component';

describe('PorfoliosComponent', () => {
  let component: PorfoliosComponent;
  let fixture: ComponentFixture<PorfoliosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorfoliosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
