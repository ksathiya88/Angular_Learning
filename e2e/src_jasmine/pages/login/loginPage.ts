import { ILoginPage } from "./login.interface";
import {
  setElement,
  elemClick,
  setValues,
  waitUntillLoaded,
  waitUntillEnabled,
  checkValues
} from "protractor_utility";
import { promise as wdpromise } from "selenium-webdriver";
import { browser, element, by } from "protractor";
import { ILocRef, LocationTypes, IValueTypes } from "protractor_utility";
import { readExcel } from "protractor_utility";

// export const loginPageIds: ILoginPage<ILocRef> = {
//   username: { type: LocationTypes.Xpath, value: '//*[@id="username"]' },
//   password: { type: LocationTypes.Id, value: "password" },
//   submit: { type: LocationTypes.Class, value: "submit" }
// };

export const loginPageIds = readExcel(
  IValueTypes.Location,
  "./e2e/values/login.xlsx"
);

// export const loginPageValues: ILoginPage<string> = {
//   username: "abc",
//   password: "pass"
// };

export const loginPageValues = readExcel(
  IValueTypes.Value,
  "./e2e/values/login.xlsx"
);

// console.log("loginPageValues", loginPageValues2);

// console.log("loginPageIds", loginPageIds2);

// export const loginPageCheckValues: ILoginPage<string> = {
//   username: "abc111",
//   password: "pass"
// };

export const loginPageCheckValues = readExcel(
  IValueTypes.CheckValue,
  "./e2e/values/login.xlsx"
);

export class LoginPage {
  login(): wdpromise.Promise<any> {
    return setValues(loginPageIds, loginPageValues)
      .then(() => {
        browser.sleep(4000);
      })
      .then(() => {
        return checkValues(loginPageIds, loginPageCheckValues);
      })
      .then(() => {
        return waitUntillEnabled(loginPageIds.submit);
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
        return waitUntillLoaded(loginPageIds.username);
      })
      .then(() => browser.sleep(5000))
      .then(() => {
        return this.login();
      });
  }
}
