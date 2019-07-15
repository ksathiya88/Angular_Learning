import { promise as wdpromise } from "selenium-webdriver";
import { element, by } from "protractor";

export function setElement(id: string, value: string): wdpromise.Promise<any> {
  const elemObj = element(by.id(id));
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
