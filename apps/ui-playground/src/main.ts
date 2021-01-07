import { ViewEncapsulation, enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { ENVIRONMENT } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (ENVIRONMENT.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.None
  })
  .catch((err: Error) => {
    console.error(err);
  });
