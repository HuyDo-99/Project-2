import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeminorComponent } from './create-seminor.component';

describe('CreateSeminorComponent', () => {
  let component: CreateSeminorComponent;
  let fixture: ComponentFixture<CreateSeminorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSeminorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSeminorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
