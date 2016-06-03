import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../../shared';

import {MdButton} from '@angular2-material/button';
import {MdIcon} from '@angular2-material/icon';
import {MdListItem, MdListAvatar} from '@angular2-material/list';

const ICON_CHECKED = 'done';
const ICON_NOT_CHECKED = 'check_box_outline_blank';

@Component({
  moduleId: module.id,
  selector: 'rs-product-item',
  directives: [MdListItem, MdListAvatar,
    MdButton, MdIcon],
  templateUrl: 'product-item.component.html',
  styleUrls: ['product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: ProductModel;
  @Input() checked: boolean;
  @Input() shouldLineThrough: boolean;
  @Output() toggle = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() startEditing = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  checkboxIcon(status) {
    return status ? ICON_CHECKED : ICON_NOT_CHECKED;
  }

  myStyle(status) {
    return this.shouldLineThrough && this.product.isBought ? 'bought' : '';
  }
}
