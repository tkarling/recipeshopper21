import { Component, OnInit } from '@angular/core';
import {Store, Action} from '@ngrx/store';

import {ProductItemComponent} from './product-item';
import {ProductInputComponent} from './product-input';

import {editedItem, START_EDITING, STOP_EDITING
    // , EditedItemActions
} from '../../shared';
import {ProductModel} from '../../shared';

export enum ProductListType {
    shopping,
    favorites
}

@Component({
    moduleId: module.id,
    selector: 'rs-product-list',
    directives: [ProductItemComponent, ProductInputComponent],
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    type: ProductListType = ProductListType.shopping;
    testItem: ProductModel = new ProductModel('moi');
    products: ProductModel[] = [
        new ProductModel('milk', 'dairy', '1', 'carton'),
        new ProductModel('bread', 'bakery'),
        new ProductModel('broccoli', 'veggies')
    ];

    constructor(private store: Store<any>
        // , private editedItemActions: EditedItemActions
    ) {
        // store.select('editedItem');
        // console.log('this.editedItem', store.getState().editedItem);
    }

    ngOnInit() {
    }

    isEditedItem(product: ProductModel) {
        return this.store.getState().editedItem === product;
    }

    startEditing(product: ProductModel) {
        // this.editedItemActions.startEditing(product);
        this.store.dispatch(<Action>{
            type: START_EDITING, payload: {
                item: product
            }
        });
    }

    stopEditing() {
        // this.editedItemActions.stopEditing();
        this.store.dispatch(<Action>{
            type: STOP_EDITING
        });
    }



    get shouldLineThrough() {
        return this.type === ProductListType.shopping;
    }

    checked(product) {
        return this.type === ProductListType.shopping ? product.isBought : product.onList;
    }

    toggle(product: ProductModel) {
        console.log('toggle', product);
        product.isBought = !product.isBought;
        // return  this.type === ProductListType.shopping ?
        //     this.productsService.toggleBought(product) : this.productsService.toggleOnList(product);
    }

    removeProduct(product: ProductModel) {
        console.log('removeProduct', product);
        // return  this.type === ProductListType.shopping ?
        //     this.productsService.toggleOnList(product) : this.productsService.removeProduct(product);
    }

    addProduct(product: ProductModel) {
        console.log('addProduct', product);
    }

    updateProduct(product: ProductModel, updates: ProductModel) {
        console.log('updateProduct', product, updates);
        this.stopEditing();
    }

}
