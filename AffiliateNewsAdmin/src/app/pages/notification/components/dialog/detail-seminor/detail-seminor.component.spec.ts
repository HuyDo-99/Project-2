import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSeminorComponent } from './detail-seminor.component';

describe('DetailSeminorComponent', () => {
  let component: DetailSeminorComponent;
  let fixture: ComponentFixture<DetailSeminorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSeminorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSeminorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
