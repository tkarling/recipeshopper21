import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {Observable} from 'rxjs/Rx';

import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MdButton} from '@angular2-material/button';
import {MdIcon} from '@angular2-material/icon';
import {MdIconRegistry} from '@angular2-material/icon/icon-registry';
import {MdToolbar} from '@angular2-material/toolbar';

import { ShoppingComponent } from './+shopping';
import { ProductService } from './product/product.service';
import {TestingComponent} from './testing/testing.component';

@Component({
  moduleId: module.id,
  selector: 'recipeshopper21-app',
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MdButton, MdIcon, MdToolbar,
    TestingComponent],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS],
  viewProviders: [MdIconRegistry],
  // template: `<app-testing></app-testing>`,
  templateUrl: 'recipeshopper21.component.html',
  styleUrls: ['recipeshopper21.component.css']
})
@Routes([
  { path: '/shopping', component: ShoppingComponent }
])
export class Recipeshopper21AppComponent {
  get title() {
    return 'recipeshopper21 works!';
  }
  // TODO: Remove this when we're done
  get diagnostic() { return 'app: ' + JSON.stringify('moi'); }
}
