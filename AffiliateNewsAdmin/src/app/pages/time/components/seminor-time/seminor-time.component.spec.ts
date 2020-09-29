import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminorTimeComponent } from './seminor-time.component';

describe('SeminorTimeComponent', () => {
  let component: SeminorTimeComponent;
  let fixture: ComponentFixture<SeminorTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminorTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminorTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
