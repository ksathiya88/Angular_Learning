import { ILoginPage } from "./login.interface";
import {
  setElement,
  elemClick,
  setValues,
  waitUntillLoaded
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
  password: "pass111"
};

export class LoginPage {
  login(): wdpromise.Promise<any> {
    return setValues(loginPageIds, loginPageValues)
      .then(() => {
        console.log("hello222222222");
        elemClick(loginPageIds.submit);
      })
      .then(() => {
        waitUntillLoaded(element(by.id("logout")));
      });
  }

  public gotoPage() {
    browser.waitForAngularEnabled(false);
    return browser.get(browser.baseUrl);
  }

  loginForProtractor(): wdpromise.Promise<any> {
    return this.gotoPage()
      .then(() => {
        waitUntillLoaded(element(by.id("username")));
      })
      .then(() => this.login());
  }
}
