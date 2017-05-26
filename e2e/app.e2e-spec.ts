import { OsciAppPage } from './app.po';

describe('osci-app App', () => {
  let page: OsciAppPage;

  beforeEach(() => {
    page = new OsciAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
