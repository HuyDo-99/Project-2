import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIntroduce1Component } from './link-introduce1.component';

describe('LinkIntroduce1Component', () => {
  let component: LinkIntroduce1Component;
  let fixture: ComponentFixture<LinkIntroduce1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkIntroduce1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkIntroduce1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
