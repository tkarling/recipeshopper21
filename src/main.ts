import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Recipeshopper21AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Recipeshopper21AppComponent);
