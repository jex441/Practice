"use strict";

/**
 * Scan through both strings's at the same time, when a difference is
 * encountered:
 *   * if this is the first edit:
 *     * if strings are the same length then consider it a replacement
 *     * if strings are different lengths then consider it a delete from the longer string
 *   * if this is the second edit then return false
 *
 * N = max(|str1|, |str2|)
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string}  str1 The first string
 * @param  {string}  str2 The second string
 * @return {boolean}      True if strings are 0 or 1 edit apart, otherwise false
 */
export function isOneOrLessAway(str1, str2) {
  let result = false;
  let longer =
    str1.length === str2.length
      ? str1.length
      : str1.length > str2.length
      ? str1
      : str2;

  if (str1.length - str2.length >= 2 || str2.length - str1.length >= 2) {
    return false;
  }

  if (str1 === str2) {
    return true;
  }

  for (let i = 0; i < longer.length; i++) {
    if (str1[i] !== str2[i]) {
      // deleting
      if (
        str1.slice(1) === str2 ||
        str2.slice(1) === str1 ||
        str1.slice(0, -1) === str2 ||
        str2.slice(0, -1) === str1
      ) {
        console.log("delete");
        result = true;
        break;
      }
      // inserting
      if (
        str1.slice(0, i) + str2[i] + str1.slice(i) === str2 ||
        str2.slice(0, i) + str1[i] + str2.slice(i) === str1
      ) {
        console.log("insert");
        result = true;
        break;
      }
      //replace
      if (
        str1.slice(0, i - 1) + str2[i] + str1.slice(i + 1) === str2 ||
        str2.slice(0, i - 1) + str1[i] + str2.slice(i + 1) === str1
      ) {
        console.log("replace");
        result = true;
        break;
      }
    }
  }

  return result;
}
