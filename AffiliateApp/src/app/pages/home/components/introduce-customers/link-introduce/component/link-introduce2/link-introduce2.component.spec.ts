import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIntroduce2Component } from './link-introduce2.component';

describe('LinkIntroduce2Component', () => {
  let component: LinkIntroduce2Component;
  let fixture: ComponentFixture<LinkIntroduce2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkIntroduce2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkIntroduce2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
