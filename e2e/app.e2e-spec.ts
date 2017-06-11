import { IBMCognitiveChatBotPage } from './app.po';

describe('ibmcognitive-chat-bot App', () => {
  let page: IBMCognitiveChatBotPage;

  beforeEach(() => {
    page = new IBMCognitiveChatBotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
