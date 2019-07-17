import { browser, logging } from "protractor";
import { LoginPage } from "../../pages/login/loginPage";

describe("check Login", () => {
  let page: LoginPage;

  beforeEach(() => {
    browser.ignoreSynchronization = true;
    page = new LoginPage();
  });

  it("should login", done => {
    page.loginForProtractor().then(done, done.fail);
  });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser
  //     .manage()
  //     .logs()
  //     .get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(
  //     jasmine.objectContaining({
  //       level: logging.Level.SEVERE
  //     } as logging.Entry)
  //   );
  // });
});
