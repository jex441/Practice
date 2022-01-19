"use strict";

/**
 * Keep track of seen characters with a Set data structure, fail when
 * a repeated character is found.
 
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersSet(str) {
  // declare an empty object to store keys and values
  let obj = {};

  // default result is true
  let result = true;

  // loop through string, if the character is in the object, increment it's value (count) by one
  // if the character is not in the object, set its value to 1
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }

  // loop through object's values. If a value is greater than 1, set result to false and exit the loop
  for (let key in obj) {
    if (obj[key] > 1) {
      result = false;
      break;
    }
  }

  // return boolean result
  return result;
}
