import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeminorComponent } from './edit-seminor.component';

describe('EditSeminorComponent', () => {
  let component: EditSeminorComponent;
  let fixture: ComponentFixture<EditSeminorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSeminorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeminorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
