import { promise as wdpromise } from "selenium-webdriver";
import { element, by, protractor, browser, ElementFinder } from "protractor";

export function setElement(id: string, value: string): wdpromise.Promise<any> {
  const elemObj = element(by.id(id));
  console.log("setElement called with", id, value);
  return elemObj.getTagName().then((tagName: string) => {
    return elemObj.getAttribute("type").then((attributeType: string) => {
      if (tagName === "select") {
        return selectProperty(id, value);
      } else if (attributeType === "radio" || attributeType === "checkbox") {
        return setCheckOrRadio(id, value);
      } else {
        return setInput(id, value);
      }
    });
  });
}

function selectProperty(id: string, value: string) {
  return element(by.id(id)).sendKeys(value);
}

function setCheckOrRadio(id: string, value: string) {
  const elemObj = element(by.id(id));
  const checked = value === "true";
  elemObj.isSelected().then(selected => {
    if (selected !== checked) {
      return clickCheckOrRadio(id);
    }
  });
}

function clickCheckOrRadio(id: string) {
  return element(by.id(id))
    .element(by.xpath(".."))
    .click();
}

function setInput(id: string, value: string) {
  const elementObj = element(by.id(id));
  elementObj.clear().then(() => {
    elementObj.sendKeys(value);
  });
}

export function elemClick(id: string) {
  return element(by.id(id)).click();
}

export function getElementFinder(id: string) {
  return element(by.id(id));
}

export interface IElement {
  id: string;
  value: string;
}

export function elementsSeq(arrayElements: IElement[]) {
  return arrayElements.reduce((promise, item) => {
    return promise.then(() => {
      return setElement(item.id, item.value);
    });
  }, protractor.promise.fulfilled());
}

export function elementsRandom(arrayElements: IElement[]) {
  const deferredAll = arrayElements.map(item => {
    setElement(item.id, item.value);
  });
  return protractor.promise.all(deferredAll);
}

export function waitUntillLoaded(elem: ElementFinder) {
  return browser.wait<boolean>(
    () => elem.isPresent(),
    10000,
    "Timeout occurred"
  );
}

export function elementPresent(
  elem: ElementFinder
): wdpromise.Promise<boolean> {
  return elem.isPresent();
}

export function waitUntillEnabled(elem: ElementFinder) {
  return browser.wait<boolean>(
    () => elem.isEnabled(),
    10000,
    "Timeout occurred"
  );
}

export function setValues(ids: {}, values: {}) {
  console.log("set Values called with", ids, values);
  return elementsSeq(getElements(ids, values));
}

export function getElements(ids: {}, values: {}) {
  const elements: IElement[] = [];
  Object.keys(ids).forEach(key => {
    if (key in values) {
      const value: string = values[key];
      const id: string = ids[key];
      elements.push({ id, value });
    }
  });
  console.log("getElements returns", elements);
  return elements;
}
