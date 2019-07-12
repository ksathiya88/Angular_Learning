import {Before, Given, Then, When} from 'cucumber';
import {expect} from 'chai';

import {AppPage} from '../pages/app.po';
import {browser} from 'protractor';

let page: AppPage;

Before(() => {
  page = new AppPage();
  browser.ignoreSynchronization = true;
});

Given(/^I am on the home page$/, {timeout: 5 * 5000}, async () => {
  await page.navigateTo();
});

When(/^I do nothing$/, () => {
});

Then(/^I should see the title$/, {timeout: 2 * 5000}, async () => {
  expect(await page.getTitleText()).to.equal('Template Model Form');
});
