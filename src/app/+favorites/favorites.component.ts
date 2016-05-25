import {Component, OnInit} from '@angular/core';

import {ProductListComponent} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'rs-favorites',
  directives: [ProductListComponent],
  templateUrl: 'favorites.component.html',
  styleUrls: ['favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
