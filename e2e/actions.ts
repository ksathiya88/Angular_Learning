import { promise as wdpromise } from "selenium-webdriver";
import { element, by, protractor, browser, ElementFinder } from "protractor";
import { LocationTypes, IElement, ILocRef } from "./action.interface";
import { assertNotNull } from "@angular/compiler/src/output/output_ast";
import { assert } from "chai";
export function setElement(
  location: ILocRef,
  value: string
): wdpromise.Promise<any> {
  console.log("setElement called with", location, value);
  const elemObj: ElementFinder = getElementFinder(location);
  return elemObj.getTagName().then((tagName: string) => {
    return elemObj.getAttribute("type").then((attributeType: string) => {
      if (tagName === "select") {
        return selectProperty(elemObj, value);
      } else if (attributeType === "radio" || attributeType === "checkbox") {
        return setCheckOrRadio(elemObj, value);
      } else {
        return setInput(elemObj, value);
      }
    });
  });
}

export function checkElement(
  location: ILocRef,
  value: string
): wdpromise.Promise<any> {
  const elemObj: ElementFinder = getElementFinder(location);
  return elemObj.getTagName().then((tagName: string) => {
    return elemObj.getAttribute("type").then((attributeType: string) => {
      if (tagName === "select") {
        return expect(elemObj.$("option:checked").getText()).toBe(value);
      } else if (attributeType === "radio" || attributeType === "checkbox") {
        return checkCheckbox(value, elemObj);
      } else {
        return expect(elemObj.getAttribute("value")).toBe(value);
      }
    });
  });
}

function checkCheckbox(
  value: string,
  elemObj: ElementFinder
): wdpromise.Promise<any> {
  if (value === "true") {
    return elemObj.isSelected().then(recValue => {
      return assert.equal(recValue.toString(), value);
    });
    // return assert.equal(elemObj.isSelected()).toBeTruthy;
  }
  // else {
  //   return expect(elemObj.isSelected()).toBeFalsy;
  // }
}

function selectProperty(elemObj: ElementFinder, value: string) {
  return elemObj.sendKeys(value);
}

function setCheckOrRadio(elemObj: ElementFinder, value: string) {
  const checked = value === "true";
  elemObj.isSelected().then(selected => {
    if (selected !== checked) {
      return clickCheckOrRadio(elemObj);
    }
  });
}

function clickCheckOrRadio(elemObj: ElementFinder) {
  return elemObj.element(by.xpath("..")).click();
}

function setInput(elemObj: ElementFinder, value: string) {
  elemObj.clear().then(() => {
    elemObj.sendKeys(value);
  });
}

export function elemClick(locRef: ILocRef) {
  return getElementFinder(locRef).click();
}

export function getElementFinder(location: ILocRef): ElementFinder {
  console.log("getElementFinder called with", location);
  let elemObj: ElementFinder;
  if (location.type === LocationTypes.Id) {
    elemObj = element(by.id(location.value));
  } else if (location.type === LocationTypes.Xpath) {
    elemObj = element(by.xpath(location.value));
  } else {
    // for class
    elemObj = element(by.className(location.value));
  }
  return elemObj;
}

export function elementsSeq(arrayElements: IElement[]) {
  console.log("elementsSeq called with", arrayElements);
  return arrayElements.reduce((promise, item) => {
    return promise.then(() => {
      return setElement(item.location, item.value);
    });
  }, protractor.promise.fulfilled());
}

export function elementsRandom(arrayElements: IElement[]) {
  const deferredAll = arrayElements.map(item => {
    setElement(item.location, item.value);
  });
  return protractor.promise.all(deferredAll);
}

export function checkRandom(arrayElements: IElement[]) {
  const deferredAll = arrayElements.map(item => {
    checkElement(item.location, item.value);
  });
  return protractor.promise.all(deferredAll);
}

export function waitUntillLoaded(locRef: ILocRef) {
  return browser.wait<boolean>(
    () => getElementFinder(locRef).isPresent(),
    10000,
    "Timeout occurred"
  );
}

export function elementPresent(locRef: ILocRef): wdpromise.Promise<boolean> {
  return getElementFinder(locRef).isPresent();
}

export function waitUntillEnabled(locRef: ILocRef) {
  return browser.wait<boolean>(
    () => getElementFinder(locRef).isEnabled(),
    10000,
    "Timeout occurred"
  );
}

export function setValues(ids: {}, values: {}) {
  console.log("set Values called with", ids, values);
  return elementsSeq(getElements(ids, values));
}

export function checkValues(ids: {}, values: {}) {
  console.log("set Values called with", ids, values);
  return checkRandom(getElements(ids, values));
}

export function getElements(ids: {}, values: {}) {
  const elements: IElement[] = [];
  Object.keys(ids).forEach(key => {
    if (key in values) {
      const value: string = values[key];
      const location: ILocRef = ids[key];
      elements.push({ location, value });
    }
  });
  console.log("getElements returns", elements);
  return elements;
}
