import {
  beforeEach,
  beforeEachProviders,
  describe,
  fdescribe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ProductInputComponent } from './product-input.component';

describe('Component: ProductInput', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ProductInputComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ProductInputComponent],
      (component: ProductInputComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ProductInputComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ProductInputComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <rs-product-input></rs-product-input>
  `,
  directives: [ProductInputComponent]
})
class ProductInputComponentTestController {
}

