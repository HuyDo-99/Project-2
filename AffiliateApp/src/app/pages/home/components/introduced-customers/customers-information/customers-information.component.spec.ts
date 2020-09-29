import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersInformationComponent } from './customers-information.component';

describe('CustomersInformationComponent', () => {
  let component: CustomersInformationComponent;
  let fixture: ComponentFixture<CustomersInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
