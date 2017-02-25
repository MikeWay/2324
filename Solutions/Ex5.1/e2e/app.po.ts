import { browser, element, by } from 'protractor';

export class FlySharpPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getNumTableRows() {
    return (element.all(by.css('table tbody tr'))).count();
  }

  getNumTableCols() {
    return (element(by.css('table tbody tr')).all(by.css('td'))).count();
  }  

  clickToggle() {
    element(by.css('#toggle')).click();
  }

  getTableCellData(row : string, col : string){
    let query : string = 'table tr:nth-child(' + row + ') td:nth-child(' + col + ')';
    //console.log("QUERY: " + query);
    return element(by.css(query)).getText();
  }
}
