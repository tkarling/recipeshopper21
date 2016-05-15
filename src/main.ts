import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

import { Recipeshopper21AppComponent, environment } from './app/';
import {ProductService} from './app/product/product.service';


if (environment.production) {
  enableProdMode();
}

const FB_BASE_PATH = 'https://recipeshopper2.firebaseio.com';
bootstrap(Recipeshopper21AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase(FB_BASE_PATH),
  ProductService
]);
