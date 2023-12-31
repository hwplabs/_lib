"use strict";
// Author: Tugbeh Emmmanuel <etugbeh@outlook.com>
// Date: 2023-06-24 17:40:00
// https://fakerjs.dev/api/faker.html#constructor

import { faker } from "@faker-js/faker";
import FakerPost from "./modules/Post";
import * as Schema from "./constants";

// import fakerHelper, { FakerHelper } from "lib/skyhook/helpers/FakerHelper";
// TODO
export class FakerHelper extends FakerPost {
  get Users() {
    return this.factory({ ...Schema.USER, id: "id" }, 100);
  }
  get Posts() {
    return this.factory({ ...Schema.POST, id: "id" }, 100);
  }
  // ////////////////////////////////////////////////////////////

  factory(schema, size = 10, asObject = false) {
    let [arr, obj] = [[], {}];
    for (let i = 0; i < size; i++) {
      Object.entries(schema).map(([key, callback]) => {
        let value;
        switch (typeof callback) {
          case "string":
            value =
              callback.charAt(0) === "#" ? callback.slice(1) : this[callback];
            break;
          case "object":
            value = callback ? this.factory(callback, 1).pop() : null;
            break;
          case "function":
            value = callback();
            break;
          default:
            value = callback;
        }
        obj[key] = value;
      });
      arr.push(obj);
      obj = {};
    }
    return asObject ? arr.pop() : arr;
  }
  // ////////////////////////////////////////////////////////////

  // 12
  static numbers = (length = 2, allowLeadingZeros = false) =>
    faker.string.numeric({ length, allowLeadingZeros });
  // AB
  static letters = (length = 2, casing = "upper") =>
    faker.string.alpha({ length, casing });
  // 1970.00
  static price = (min = 1, max = 999999, dec = 2) =>
    faker.commerce.price({ min, max, dec });
  // $Password1
  static password = (length = 8) =>
    faker.string.fromCharacters("!,@,#,$,%,^,&,*".split(",")) +
    faker.string.alpha(length) +
    faker.string.numeric();
  // https://picsum.photos/seed/NWbJM2B/640/480?grayscale&blur=4
  static image = (width = 160, height = 160, grayscale = false, blur = false) =>
    faker.image.urlPicsumPhotos({ width, height, grayscale, blur });
  // random element in array/csv
  static in = (arrOrCsv, delimiter = ",") =>
    faker.string.fromCharacters(
      typeof arrOrCsv === "string" ? arrOrCsv.split(delimiter) : arrOrCsv
    );
  // random key/value in enum
  static inEnum = (arrOrObj, inKeys = true) =>
    faker.string.fromCharacters(
      inKeys ? Object.keys(arrOrObj) : Object.values(arrOrObj)
    );
}

export default new FakerHelper();
