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

  it('should have a module definition', () => {
    expect(ThunderCoreModule).toBeDefined();
  });
});
