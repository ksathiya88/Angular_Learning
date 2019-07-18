import { AppPage } from "../../src/pages/app.po";
import { browser, logging } from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    browser.ignoreSynchronization = true;
    page = new AppPage();
  });

  it("should display welcome message", () => {
  
    page.navigateTo();
    expect(page.getTitleText()).toEqual("Template Model Form");
    for (i = 0; i < 100000; i++) {
      console.log(i);
    }
 
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
