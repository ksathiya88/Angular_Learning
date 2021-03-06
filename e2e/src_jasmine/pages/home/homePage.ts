import { IHomePage } from "./home.interface";
import {
  waitUntillLoaded,
  getElementFinder,
  elementPresent
} from "protractor_utility";
import { assert } from "chai";
import { ILocRef, LocationTypes } from "protractor_utility";

export const homePageIds: IHomePage<ILocRef> = {
  employeeList: { type: LocationTypes.Id, value: "empList_btn" },
  employeeAdd: { type: LocationTypes.Id, value: "empAdd_btn" },
  logout: { type: LocationTypes.Id, value: "logout" }
};

export class HomePage {
  waitForHomePage() {
    return waitUntillLoaded(homePageIds.logout);
  }
  assertHomePagePresent() {
    return elementPresent(homePageIds.employeeAdd).then(boolValue => {
      return assert.isTrue(boolValue);
    });
  }
}
