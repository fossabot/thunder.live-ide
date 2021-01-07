import { TestBed, waitForAsync } from '@angular/core/testing';

import { AppModule } from '../../src/app/app.module';

describe('ThunderCoreModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [AppModule]
      }).compileComponents() as Promise<void>;
    })
  );

  it('should have a module definition', () => {
    expect(AppModule).toBeDefined();
  });
});
