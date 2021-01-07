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

  it('should have a module definition', () => {
    expect(UIControlsModule).toBeDefined();
  });
});
