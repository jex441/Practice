"use strict";

/**
 * Discover whether a string is a rotated version of the first string
 * eg:
 *  "waterbottle" is a rotated version of "ttlewaterbo"
 * @param  {string}  str1   First string
 * @param  {string}  str2   String to check if it is a rotated version of str1
 * @return {boolean}        True if str1 and str2 are rotated versions of eachother, otherwise false
 *
 *
 * Time: O(n)
 **/
export function isRotatedSubstring(str1, str2) {
  // Declare an empty string to build our comparison variable
  let newString = "";

  // Edge cases
  if (!str1 || !str2) {
    let error = "invalid input";
    throw error;
  }
  if (str1.length !== str2.length) {
    return false;
  }

  // Loop through str2, if str2[i] is equal to the first character in str1
  // and the following three characters are the same as well we probably have
  // the beginning of our str2, though if it is different after the first three
  // the solution fails. Slice from where the first character was found and
  // add the end to the beginning. The last will be first, and the first last.
  for (let i = 0; i < str2.length; i++) {
    if (
      str2[i] + str2[i + 1] + str2[i + 2] + str2[i + 3] ===
      str1[0] + str1[1] + str1[2] + str1[3]
    ) {
      newString = str2.slice(i) + str2.slice(0, i);
      break;
    }
  }

  // If our newString is equal to str1, we have a rotated string and return true
  // else, false
  if (newString === str1) {
    return true;
  } else {
    return false;
  }
}
