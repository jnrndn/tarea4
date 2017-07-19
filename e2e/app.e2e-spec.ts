import { Tarea4Page } from './app.po';

describe('tarea4 App', () => {
  let page: Tarea4Page;

  beforeEach(() => {
    page = new Tarea4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
