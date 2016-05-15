import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { RecipeService } from './recipe.service';

describe('Recipe Service', () => {
  beforeEachProviders(() => [RecipeService]);

  it('should ...',
      inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});
