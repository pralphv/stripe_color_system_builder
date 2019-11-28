import { lch, hex } from "color-convert";
import { hex as hex2Contrast } from "wcag-contrast";
import { ID_DELIMITER } from "../constants/colorGradient";

export function hexToContrast(hex1, hex2) {
  return hex2Contrast(hex1, hex2);
}

export function getTitlecaseText(str = "") {
  return str.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function lchToHex(lchObj) {
  //slow ?
  let hex_ = lch.hex(lchObj.l, lchObj.c, lchObj.h);
  hex_ = `#${hex_}`;
  return hex_;
}

export function lchObjAddHex(lchObj) {
  let hex_ = lchToHex(lchObj);
  lchObj["hex"] = hex_;
  return { ...lchObj, hex: hex_ };
}

export function lchObjAddLch(lchObj) {
  const hex_ = lchObj.hex;
  lchObj = hex.lch(hex_.substr(1, hex_.length));
  return {
    l: lchObj[0],
    c: lchObj[1],
    h: lchObj[2],
    hex: hex_
  };
}

export function minMaxValue(newValue, minValue, maxValue) {
  if (newValue < minValue) {
    newValue = minValue;
  } else if (newValue > maxValue) {
    newValue = maxValue;
  }
  return newValue;
}

export function separateIdSubId(id) {
  const delimitedStrings = id.split(ID_DELIMITER);
  return { id: delimitedStrings[0], subId: delimitedStrings[1] };
}

