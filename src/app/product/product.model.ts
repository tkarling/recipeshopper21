
export const FAVORITES = 'FAVORITES';

export const DAIRY = 'DAIRY';
export const GRAINS = 'GRAINS';
export const VEGGIES_FRUIT = 'VEGGIES&FRUIT';
export const EXTRAS = 'EXTRAS';

export const aisles: string[] = [DAIRY, GRAINS, VEGGIES_FRUIT, EXTRAS];

export class ProductModel {
  $key: string;
  recipe: string = FAVORITES;
  onList: boolean = true;

  constructor(
      public name = '', public aisle = '', public amount = '', public unit = '',
      public isBought = false) {}
}
