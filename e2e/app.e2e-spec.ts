import { SocketExamplePage } from './app.po';

describe('socket-example App', () => {
  let page: SocketExamplePage;

  beforeEach(() => {
    page = new SocketExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
