import {provideStore} from '@ngrx/store';
import {
  beforeEach,
  beforeEachProviders,
  describe,
  xdescribe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ProductListComponent } from './product-list.component';

import {editedItem } from '../../shared';

describe('Component: ProductList', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ProductListComponent, provideStore({ editedItem })]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ProductListComponent],
      (component: ProductListComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ProductListComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ProductListComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <rs-product-list></rs-product-list>
  `,
  directives: [ProductListComponent]
})
class ProductListComponentTestController {
}

