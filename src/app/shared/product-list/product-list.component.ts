import { Component, OnInit } from '@angular/core';
import {ProductItemComponent} from './product-item';
import {ProductInputComponent} from './product-input';

@Component({
  moduleId: module.id,
  selector: 'rs-product-list',
  directives: [ProductItemComponent, ProductInputComponent],
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
