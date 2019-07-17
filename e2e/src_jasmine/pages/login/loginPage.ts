import {ILoginPage} from './login.interface';
import {setElement, elemClick, setValues} from '../../../actions';
import {promise as wdpromise} from 'selenium-webdriver';
import {browser, element, by} from 'protractor';

export const loginPageIds: ILoginPage = {
  username: 'username',
  password: 'password',
  submit: 'submit'
};

export const loginPageValues: ILoginPage = {
  username: 'abc',
  password: 'pass',
};

export class LoginPage {
  login(): wdpromise.Promise<any> {
    return setValues(loginPageIds, loginPageValues)
      .then(() => {
        elemClick(loginPageIds.submit);
      });
  }

  public gotoPage() {
    browser.waitForAngularEnabled(false);
    return browser.get(browser.baseUrl);
  }

  loginForProtractor(): wdpromise.Promise<any> {
    return this.gotoPage().then(() => {
      return this.login();
    });
  }
}
