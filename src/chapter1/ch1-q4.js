"use strict";

/**
 * Go through characters in string and set flag to indicate if there is an
 * odd number of that character. If there is more than one character with an
 * odd number of occurences then it cannot be a palindrome.
 *
 *
 * @param  {string[]} str String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */
export function isPalindromePermutationsSet(str) {
  let map = {};

  let result = true;
  let oddChars = {};
  let oddCharsCount = 0;
  if (str === []) {
    return true;
  }

  if (!str) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else if (map[str[i]]) {
      map[str[i]] += 1;
    }
  }

  for (let key in map) {
    if (map[key] % 2 !== 0 && oddChars[key]) {
      oddChars[key] += 1;
    }
    if (oddChars[key] === undefined && map[key] % 2 !== 0) {
      oddChars[key] = 1;
      map[key] = undefined;
      oddCharsCount += 1;
    }
  }

  for (let key in map) {
    if (oddCharsCount > 1) {
      result = false;
      break;
    }
    if (map[key] !== undefined)
      if (map[key] % 2 !== 0) {
        result = false;
        break;
      }
  }

  console.log(map);
  return result;
}
