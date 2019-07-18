import { browser, logging } from "protractor";
import { LoginPage } from "../../pages/login/loginPage";
import { HomePage } from "../../pages/home/homePage";

describe("check Login", () => {
  let login: LoginPage;
  let home: HomePage;

  beforeEach(() => {
    browser.ignoreSynchronization = true;
    login = new LoginPage();
    home = new HomePage();
  });

  it("should login", done => {
    login
      .loginForProtractor()
      .then(() => home.waitForHomePage())
      .then(() => home.assertHomePagePresent())
      .then(done, done.fail);
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
