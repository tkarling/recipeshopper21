import { Recipeshopper21Page } from './app.po';

describe('recipeshopper21 App', function() {
  let page: Recipeshopper21Page;

  beforeEach(() => {
    page = new Recipeshopper21Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('recipeshopper21 works!');
  });
});
