import { ILoginPage } from "./login.interface";
import { setElement, elemClick } from "e2e/actions";
import { promise as wdpromise } from "selenium-webdriver";
import { browser, element, by } from "protractor";

export const loginPageIds: ILoginPage = {
  username: "username",
  password: "password",
  submit: "submit"
};

export class LoginPage {
  login(): wdpromise.Promise<any> {
    const username = "abc";
    const password = "pass";
    return setElement(loginPageIds.username, username)
      .then(() => {
        setElement(loginPageIds.password, password);
      })
      .then(() => {
        elemClick(loginPageIds.submit);
      });
  }

  public gotoPage() {
    browser.waitForAngularEnabled(false);
    return browser.get(browser.baseUrl);
  }

  loginForProtractor(): wdpromise.Promise<any> {}
}
