"use strict";

import { result } from "lodash";

/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 * 
 *{ arg: 'aaabccc', out: '3a1b3c' }
 
 Time: O(n * 2)

 * @param  {string} str [description]
 * @return {[type]}     [description]
 */

export function compressString(str) {
  // If null/undefined, return
  if (!str) {
    return str;
  }

  // Empty object for key value pairs
  let map = {};
  // Count for each character in string
  let count = 1;
  // Keys for our Map object
  let keys = 0;

  // Loop through string with two pointers, one at the beginning and one which is one index ahead of it
  // They will iterate over the string and if they are equal, the count increases until
  // they are not equal. Then the map[keys] is equal to the total count, the character being counted,
  // and the count is reset to 1 before proceeding
  for (let i = 0, j = 1; i < str.length && j < str.length; i++, j++) {
    if (str[i] === str[j]) {
      count += 1;
    }
    // If they are not equal, log the count so far and reset it to 1 to continue to the next character
    // Also do this if we are at the end of the string
    if (str[i] !== str[j] || j === str.length - 1) {
      map[keys] = [count, str[i]];
      keys += 1;
      count = 1;
    }
  }

  // Empty array to push our counts and characters
  let result = [];

  // Iterate over the object, pushing the values in in order
  for (let key in map) {
    result.push(map[key].join(""));
  }

  // In the event the last character is a single and different than the second to last character, push it onto the result as
  // the before described loop will not account for it
  if (str[str.length - 1] !== str[str.length - 2]) {
    result.push(1, str[str.length - 1]);
  }

  // If our result is not shorter than the string, return the string
  if (result.join("").length >= str.length) {
    return str;
  }

  // Otherwise return the result as a string by splitting it
  return result.join("");
}
