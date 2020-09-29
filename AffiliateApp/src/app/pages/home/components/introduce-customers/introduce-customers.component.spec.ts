import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceCustomersComponent } from './introduce-customers.component';

describe('IntroduceCustomersComponent', () => {
  let component: IntroduceCustomersComponent;
  let fixture: ComponentFixture<IntroduceCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduceCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
