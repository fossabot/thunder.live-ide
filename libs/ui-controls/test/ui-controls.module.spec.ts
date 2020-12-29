import { TestBed, waitForAsync } from '@angular/core/testing';

import { UIControlsModule } from '../src/ui-controls.module';

describe('UiControlsModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [UIControlsModule]
      }).compileComponents() as Promise<void>;
    })
  );

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(UIControlsModule).toBeDefined();
  });
});
