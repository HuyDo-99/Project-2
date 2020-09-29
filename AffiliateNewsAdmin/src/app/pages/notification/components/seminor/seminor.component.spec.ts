import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminorComponent } from './seminor.component';

describe('SeminorComponent', () => {
  let component: SeminorComponent;
  let fixture: ComponentFixture<SeminorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
