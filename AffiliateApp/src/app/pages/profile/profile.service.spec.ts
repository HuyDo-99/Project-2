import { TestBed } from "@angular/core/testing";

import { ProfileService } from "./service/profile.service";

describe("ProfileService", () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
