export class Recipeshopper21Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('recipeshopper21-app h1')).getText();
  }
}
