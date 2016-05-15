// import { Injectable } from '@angular/core';
// import {AngularFire, defaultFirebase, FIREBASE_PROVIDERS, FirebaseListObservable, FirebaseDatabase} from 'angularfire2';
//
//
// import {
//   beforeEachProviders,
//   it,
//   describe,
//   expect,
//   inject,
//   injectAsync
// } from '@angular/core/testing';
//
// import {ProductModel, DAIRY, GRAINS, VEGGIES_FRUIT} from './product.model';
// import { ProductService } from './product.service';
//
// let product1Buy:ProductModel = new ProductModel("bread", GRAINS);
// let product2NS:ProductModel = new ProductModel("butter", DAIRY);
// let product3Del:ProductModel = new ProductModel("tomatoes", VEGGIES_FRUIT);
// let product4Add:ProductModel = new ProductModel("broccoli", VEGGIES_FRUIT);
// let product5Upd:ProductModel = new ProductModel("milk", DAIRY);
// //const products:ProductModel[] = [product1Buy, product2NS, product3Del, product5Upd];
//
// @Injectable()
// class MockProductList {
//   products:any = [];
//   key: number = 0;
//
//   constructor(products) {
//     this.products = products;
//   }
//
//   push(item) {
//     item.$key = this.key++;
//     this.products.push(item);
//   }
//
//   remove(item) {
//     const i = this.products.indexOf(item);
//     this.products.splice(i, 1);
//   }
//
//   update(item, updatedFields) {
//     const i = this.products.indexOf(item);
//     this.products[i] = (<any>Object).assign({}, this.products[i], updatedFields);
//   }
//
// }
//
// @Injectable()
// class MockDatabase extends FirebaseDatabase {
//   products:MockProductList;
//
//   constructor(products) {
//     super('');
//     this.products = new MockProductList(products);
//   }
//
//   $list() {
//     return this.products.products;
//   }
//
//   $me() {
//     return this.products;
//   }
// }
//
// @Injectable()
// class MockAngularFire extends AngularFire {
//   // database:any = new MockDatabase([]);
//
//   constructor() {
//     super('', null, new MockDatabase([]));
//   }
//
//
// }
//
// describe('Product Service', () => {
//   // let service:ProductService;
//
//   beforeEachProviders(() => [
//     AngularFire, { useClass: MockAngularFire },
//     ProductService,
//   ]);
//
//   it('', injectAsync([AngularFire, ProductService], (service: ProductService) => {
//         // service = myService;
//         // service.$setMock(new MockAngularFire());
//         // service.addProduct(product1Buy);
//         // service.addProduct(product2NS);
//         // service.addProduct(product3Del);
//         // service.addProduct(product5Upd);
//     expect(service).toBeTruthy();
//
//   }));
//
//   // it('should init', () => {
//   //   expect(service).toBeTruthy();
//   // });
// });
