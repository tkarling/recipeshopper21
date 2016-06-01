import { Component, OnInit } from '@angular/core';
import {provideStore, Store, Action} from '@ngrx/store';

import {ProductItemComponent} from './product-item';
import {ProductInputComponent} from './product-input';

import {editedItem, START_EDITING, STOP_EDITING
    // , EditedItemActions
} from '../../shared';
import {ProductModel} from '../../shared';

@Component({
    moduleId: module.id,
    selector: 'rs-product-list',
    directives: [ProductItemComponent, ProductInputComponent],
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    testItem: ProductModel = new ProductModel('moi');

    constructor(private store: Store<any>
    // , private editedItemActions: EditedItemActions
    ) {
        // store.select('editedItem');
        // console.log('this.editedItem', store.getState().editedItem);
    }

    ngOnInit() {
    }
    
    isEditedItem() {
        return this.store.getState().editedItem === this.testItem;
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

}
