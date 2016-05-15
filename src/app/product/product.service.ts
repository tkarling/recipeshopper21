import { Injectable } from '@angular/core';
import {AngularFire, defaultFirebase, FIREBASE_PROVIDERS, FirebaseListObservable} from 'angularfire2';
import {ProductModel} from "./product.model";

@Injectable()
export class ProductService {
  products:FirebaseListObservable<any[]>;
  editingProductKey:String = '';
  $items: any;

  constructor(angularFire?: AngularFire) {
    console.log('hello');
    if(angularFire) {
      this.products = angularFire.database.list('/products');
      this.products.subscribe((result) => {
        console.log('result', result);
      });
    }
  }

  // for unit testing only
  $setMock(mock: any) {
    if(mock) {
      this.products = mock.database.$me();
      this.$items = mock.database.$list()
    }
  }

  // for unit testing only
  $products() {
    return this.$items;
  }

  editing(product:ProductModel) {
    return this.editingProductKey === product.$key;
  }

  startEditing(product:ProductModel) {
    this.editingProductKey = product.$key;
  }

  stopEditing() {
    this.editingProductKey = '';
  }

  addProduct(newProduct:ProductModel) {
    this.products.push(newProduct);
  }

  updateProduct(product:ProductModel, updatedProduct:ProductModel) {
    this.products.update(product, updatedProduct);
    this.stopEditing();
  }

  toggleOnList(product: ProductModel) {
    this.products.update(product, {onList: ! product.onList});
  }

  toggleBought(product: ProductModel) {
    this.products.update(product, {isBought: ! product.isBought});
  }

  removeProduct(product:ProductModel) {
    this.products.remove(product);
  }

}
