import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLabComponent } from './my-lab.component';

describe('MyLabComponent', () => {
  let component: MyLabComponent;
  let fixture: ComponentFixture<MyLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
