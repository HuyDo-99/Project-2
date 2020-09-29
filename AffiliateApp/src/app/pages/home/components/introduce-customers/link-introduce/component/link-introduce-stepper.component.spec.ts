import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIntroduceStepperComponent } from './link-introduce-stepper.component';

describe('LinkIntroduceStepperComponent', () => {
  let component: LinkIntroduceStepperComponent;
  let fixture: ComponentFixture<LinkIntroduceStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkIntroduceStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkIntroduceStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
