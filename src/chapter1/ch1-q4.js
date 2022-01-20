"use strict";

/**
 * Write a function that checks whether the string is a permutation of a palindrome.
 *
 * @param  {string[]} str String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */
export function isPalindromePermutationsSet(str) {
  // Declare an empty object to store keys and values
  let map = {};
  // Default result is true
  let result = true;
  // Object for characters in the string which occur and odd number of times
  let oddChars = {};
  // Count how many odd characters there are in the string. If there is more than 1, it can not be a palindrome
  let oddCharsCount = 0;
  // If empty array, return true
  if (str === []) {
    return true;
  }
  // if undefined, return false
  if (!str) {
    return false;
  }
  // Loop through string, skip spaces, if the character is not in our map, set it's value to 1.
  // If it is in our map, increment its value (count)
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

  // Loop through our map to find odd characters, build a map of characters which occur an odd number of times
  // and increase the count of unique odd characters by one each time
  for (let key in map) {
    if (map[key] % 2 !== 0 && oddChars[key]) {
      oddChars[key] += 1;
    }
    if (oddChars[key] === undefined && map[key] % 2 !== 0) {
      oddChars[key] = 1;
      oddCharsCount += 1;
    }
  }

  // If there is more than one odd character, return false
  if (oddCharsCount > 1) {
    result = false;
  }

  return result;
}
