import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducedCustomersComponent } from './introduced-customers.component';

describe('IntroducedCustomersComponent', () => {
  let component: IntroducedCustomersComponent;
  let fixture: ComponentFixture<IntroducedCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducedCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducedCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
