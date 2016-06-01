import { Component } from '@angular/core';
// import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { EventsComponent } from './+events';

import {Observable} from 'rxjs/Rx';
import {provideStore} from '@ngrx/store';

import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MdButton} from '@angular2-material/button';
import {MdIcon} from '@angular2-material/icon';
import {MdIconRegistry} from '@angular2-material/icon/icon-registry';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdList, MdListItem} from '@angular2-material/list';

import { AislesComponent } from './+aisles';
import { RecipesComponent } from './+recipes';
import { FavoritesComponent } from './+favorites';
import { ShoppingComponent } from './+shopping';

import { editedItem } from './shared';

// import { EditedItemActions } from './shared';
import {TestingComponent} from './testing/testing.component';

@Component({
  moduleId: module.id,
  selector: 'recipeshopper21-app',
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MdButton, MdIcon, MdToolbar,
    MdList, MdListItem,
    TestingComponent],
  providers: [
    provideStore({editedItem}), 
    // EditedItemActions,
    // HTTP_PROVIDERS, 
    ROUTER_PROVIDERS
    ],
  viewProviders: [MdIconRegistry],
  // template: `<app-testing></app-testing>`,
  templateUrl: 'recipeshopper21.component.html',
  styleUrls: ['recipeshopper21.component.css']
})
@Routes([
  { path: '/shopping', component: ShoppingComponent },
  { path: '/favorites', component: FavoritesComponent },
  { path: '/recipes', component: RecipesComponent },
  { path: '/aisles', component: AislesComponent },
  {path: '/events', component: EventsComponent}
])
export class Recipeshopper21AppComponent {
  get title() {
    return 'recipeshopper21 works!';
  }
  // TODO: Remove this when we're done
  get diagnostic() { return 'app: ' + JSON.stringify('moi'); }
}
