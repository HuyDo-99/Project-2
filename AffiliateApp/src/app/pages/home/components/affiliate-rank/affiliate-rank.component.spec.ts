import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateRankComponent } from './affiliate-rank.component';

describe('AffiliateRankComponent', () => {
  let component: AffiliateRankComponent;
  let fixture: ComponentFixture<AffiliateRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
