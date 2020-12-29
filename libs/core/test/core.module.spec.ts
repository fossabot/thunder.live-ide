import { TestBed, waitForAsync } from '@angular/core/testing';

import { ThunderCoreModule } from '../src/core.module';

describe('ThunderCoreModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ThunderCoreModule]
      }).compileComponents() as Promise<void>;
    })
  );

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ThunderCoreModule).toBeDefined();
  });
});
