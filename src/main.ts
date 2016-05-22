import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';
import {Http, HTTP_PROVIDERS} from '@angular/http';

import {Recipeshopper21AppComponent} from './app/recipeshopper21.component';
import {environment} from './app/environment';
import {ProductService} from './app/product/product.service';
import {NlpService} from './app/nlp.service';


if (environment.production) {
  enableProdMode();
}

const FB_BASE_PATH = 'https://recipeshopper2.firebaseio.com';
bootstrap(Recipeshopper21AppComponent, [
  FIREBASE_PROVIDERS,
  Http,
  HTTP_PROVIDERS,
  defaultFirebase(FB_BASE_PATH),
  ProductService,
  NlpService
]);
