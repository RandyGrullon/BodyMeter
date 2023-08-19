import moment from "moment";
import { isBrowser } from "browser-or-node";
import { isEmpty as isValueEmpty } from "lodash";

const { v4: uuidv4 } = require("uuid");
const bodyScrollLock = require("body-scroll-lock");
import { appDateFormat, apiDateFormat, apiDateTimeFormat } from "./contants";
/* eslint-disable */

const enableBodyScroll = bodyScrollLock.enableBodyScroll;
const disableBodyScroll = bodyScrollLock.disableBodyScroll;

export const apiUrl = (path) => {
  if (/^\/([^/]|$)/.test(path)) {
    const apiRoute = process.env ? process.env.API : "";
    return `${apiRoute}${path}`;
  }
  return "invalid-path";
};

export const imagesApiUrl = (path) => {
  if (/^\/([^/]|$)/.test(path)) {
    const apiRoute = process.env ? process.env.IMAGES_API : "";
    return `${apiRoute}${path}`;
  }
  return "invalid-path";
};

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    } catch (error) {
      reject(error);
    }
  });
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toCamel(s) {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
}

export function keysToCamel(obj) {
  const newObject = {};
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  keys.forEach((k, i) => {
    const prop = toCamel(k);
    newObject[prop] = values[i];
  });
  return newObject;
}

// wheel event handler
const disableWheelScrollHandler = (e) => {
  let elementRole = e.target.getAttribute("role");
  console.log(elementRole);
  console.log(e.target);

  if (elementRole === "notification-item") {
    e.stopPropagation();
    return;
  }

  e.preventDefault();
  e.stopPropagation();
};
// keys event handler
const disableKeyboardScrollHandler = (e) => {
  const keys = [32, 33, 34, 45, 37, 38, 39, 40];
  if (keys.includes(e.keyCode)) {
    e.preventDefault();
    return;
  }
};

export const toggleScrolling = () => {
  if (!isBrowser) {
    return;
  }

  const docElement = document.documentElement;

  // if (!element.classList.contains("disabled-scrolling")) {
  //   element.addEventListener("wheel", disableWheelScrollHandler, {
  //     passive: false,
  //   });
  //   element.addEventListener("keydown", disableKeyboardScrollHandler, false);
  //   element.classList.add("disabled-scrolling");
  // } else {
  //   element.removeEventListener("wheel", disableWheelScrollHandler);
  //   element.removeEventListener("keydown", disableKeyboardScrollHandler, false);
  //   element.classList.remove("disabled-scrolling");
  // }

  const modalRootElement = document.getElementById("modal-root");
  const menuRootElement = document.getElementById("menu-root");

  if (!docElement.classList.contains("disabled-scrolling")) {
    disableBodyScroll(modalRootElement);
    disableBodyScroll(menuRootElement);

    docElement.classList.add("disabled-scrolling");
  } else {
    enableBodyScroll(modalRootElement);
    enableBodyScroll(menuRootElement);

    docElement.classList.remove("disabled-scrolling");
  }
};

export const toOptionValue = (str) => {
  return str.replace(/\s/g, "-").toLowerCase();
};

export const generateId = () => uuidv4();

export const mapToOptions = (
  arr = [],
  valueProperty = "id",
  labelProperty = "name"
) => {
  return arr.map((item) => ({
    id: generateId(),
    value: toOptionValue(item[valueProperty].toString()),
    label: item[labelProperty],
  }));
};

export const toLowerCase = (str) => String(str).toLocaleLowerCase();

export const formatDate = (
  str,
  format = appDateFormat,
  options = { time: false }
) => {
  if (!options.time) {
    return moment(str, apiDateFormat).format(format);
  }
  return moment(str, apiDateTimeFormat).format(format);
};

export const convertToApiDate = (
  str,
  options = { time: false },
  format = appDateFormat
) => {
  if (!options.time) {
    return moment(str, format).format(apiDateFormat);
  }
  return moment(str, format).format(apiDateTimeFormat);
};

export const makeFakeRequest = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });
};

export const replaceNullValues = (obj) => {
  const newObj = { ...obj };
  for (const key in newObj) {
    if (newObj[key] === null) {
      newObj[key] = "";
    }
  }
  return newObj;
};

export const checkNullDate = (value) => (!value ? "" : formatDate(value));

export const capitalizeEachWord = (str) => {
  const strArray = str.split(" ");
  let newStr = "";

  for (const word of strArray) {
    newStr = newStr + " " + capitalizeFirstLetter(word);
  }

  return newStr;
};

export const isEmpty = (value) => isValueEmpty(value);

export const scrollTo = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const calculateTimeElapsed = (date) => {
  const x = moment();
  const y = moment(date);

  const duration = moment.duration(x.diff(y));

  return {
    minutes: duration.minutes(),
    hours: duration.hours(),
    days: duration.days(),
    weeks: duration.weeks(),
  };
};
