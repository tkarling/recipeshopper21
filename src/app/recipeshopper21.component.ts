import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import {Observable} from 'rxjs/Rx';

import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MdButton} from '@angular2-material/button';
import {MdIcon} from '@angular2-material/icon';
import {MdIconRegistry} from '@angular2-material/icon/icon-registry';
import {MdToolbar} from '@angular2-material/toolbar';

import { ProductService } from './product/product.service';
import {TestingComponent} from './testing/testing.component'

@Component({
  moduleId: module.id,
  selector: 'recipeshopper21-app',
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MdButton, MdIcon, MdToolbar,
    TestingComponent],
      providers: [HTTP_PROVIDERS],
  viewProviders: [MdIconRegistry],
  // template: `<app-testing></app-testing>`,
  templateUrl: 'recipeshopper21.component.html',
  styleUrls: ['recipeshopper21.component.css']
})
export class Recipeshopper21AppComponent {
  title = 'recipeshopper21 works!';
  showAdd:  boolean = false;

  // TODO: Remove this when we're done
  get diagnostic() { return 'app: ' + JSON.stringify('moi'); }
}
