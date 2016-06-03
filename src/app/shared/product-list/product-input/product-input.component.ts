import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProductModel, EXTRAS } from '../../../shared';

import {MdInput} from '@angular2-material/input';
import {MdButton} from '@angular2-material/button';
import {MdIcon} from '@angular2-material/icon';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'rs-product-input',
  directives: [MdInput, MdButton, MdIcon, MD_CARD_DIRECTIVES],
  templateUrl: 'product-input.component.html',
  styleUrls: ['product-input.component.css']
})
export class ProductInputComponent implements OnInit {
  @Input() product;
  @Output() add = new EventEmitter();
  @Output() update = new EventEmitter();
  productModel: ProductModel;
  adding: boolean;
  defaultAisle: string = EXTRAS;

  constructor() { }

  ngOnInit() {
    this.adding = !this.product;
    this.productModel = this.product ? (<any>Object).assign({}, this.product) : new ProductModel();
    delete this.productModel.$key;
  }

  onSubmit() {
    if (this.adding) {
      this.productModel.aisle = this.productModel.aisle || EXTRAS;
      this.add.emit(this.productModel);
      this.productModel = new ProductModel();
    } else { // editing
      this.update.emit(this.productModel);
    }
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.adding); }
}
