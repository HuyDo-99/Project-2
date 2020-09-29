import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationScheduleComponent } from './operation-schedule.component';

describe('OperationScheduleComponent', () => {
  let component: OperationScheduleComponent;
  let fixture: ComponentFixture<OperationScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
