import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducedCustomerListComponent } from './introduced-customer-list.component';

describe('IntroducedCustomerListComponent', () => {
  let component: IntroducedCustomerListComponent;
  let fixture: ComponentFixture<IntroducedCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducedCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducedCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
