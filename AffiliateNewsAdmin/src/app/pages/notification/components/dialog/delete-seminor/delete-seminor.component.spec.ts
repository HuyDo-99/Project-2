import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSeminorComponent } from './delete-seminor.component';

describe('DeleteSeminorComponent', () => {
  let component: DeleteSeminorComponent;
  let fixture: ComponentFixture<DeleteSeminorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSeminorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSeminorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
