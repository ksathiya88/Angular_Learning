import { ILoginPage } from "./login.interface";
import {
  setElement,
  elemClick,
  setValues,
  waitUntillLoaded,
  waitUntillEnabled
} from "../../../actions";
import { promise as wdpromise } from "selenium-webdriver";
import { browser, element, by } from "protractor";

export const loginPageIds: ILoginPage = {
  username: "username",
  password: "password",
  submit: "submit"
};

export const loginPageValues: ILoginPage = {
  username: "abc",
  password: "pass"
};

export class LoginPage {
  login(): wdpromise.Promise<any> {
    return setValues(loginPageIds, loginPageValues)
      .then(() => {
        browser.sleep(4000);
      })
      .then(() => {
        return waitUntillEnabled(element(by.id(loginPageIds.submit)));
      })
      .then(() => {
        return elemClick(loginPageIds.submit);
      })
      .then(() => {
        return browser.sleep(4000);
      });
  }

  public gotoPage() {
    browser.ignoreSynchronization = true;
    return browser.get(browser.baseUrl);
  }

  loginForProtractor(): wdpromise.Promise<any> {
    return this.gotoPage()
      .then(() => {
        return waitUntillLoaded(element(by.id(loginPageIds.username)));
      })
      .then(() => browser.sleep(5000))
      .then(() => {
        return this.login();
      });
  }
}
