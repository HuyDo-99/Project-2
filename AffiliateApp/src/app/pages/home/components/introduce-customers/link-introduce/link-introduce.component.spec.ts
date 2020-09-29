import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIntroduceComponent } from './link-introduce.component';

describe('LinkIntroduceComponent', () => {
  let component: LinkIntroduceComponent;
  let fixture: ComponentFixture<LinkIntroduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkIntroduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
