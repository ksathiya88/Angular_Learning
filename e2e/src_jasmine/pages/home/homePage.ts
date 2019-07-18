import { IHomePage } from "./home.interface";
import {
  waitUntillLoaded,
  getElementFinder,
  elementPresent
} from "../../../actions";
import { assert } from "chai";

export const homePageIds: IHomePage = {
  employeeList: "empList_btn",
  employeeAdd: "empAdd_btn",
  logout: "logout"
};

export class HomePage {
  waitForHomePage() {
    return waitUntillLoaded(getElementFinder(homePageIds.logout));
  }
  assertHomePagePresent() {
    return elementPresent(getElementFinder(homePageIds.employeeAdd)).then(
      boolValue => {
        return assert.isTrue(boolValue);
      }
    );
  }
}
