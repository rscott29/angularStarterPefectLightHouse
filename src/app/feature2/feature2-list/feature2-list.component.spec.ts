import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2ListComponent } from './feature2-list.component';

describe('Feature2ListComponent', () => {
  let component: Feature2ListComponent;
  let fixture: ComponentFixture<Feature2ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
