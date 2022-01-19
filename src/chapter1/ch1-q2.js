"use strict";

/**
 * Keep track of characters counts with a Map data structure, fail when
 * str2 has a character different to str2 or if any characters are left over
 * at the end.
 *
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
export function isPermutationMap(str1, str2) {
  //declare empty object for storing key and values
  let map = {};
  // declare empty object for comparison
  let map1 = {};
  //repeat
  let map2 = {};
  // default result is true
  let result = true;

  // if the strings are not equal length, they can not be permutations
  if (str1.length !== str2.length) {
    return false;
  }

  // loop through string1, if map has its value, increase it by 1, else set it to 1
  // do the same for map1
  for (let i = 0; i < str1.length; i++) {
    if (map[str1[i]]) {
      map[str1[i]] += 1;
      map1[str1[i]] += 1;
    } else {
      map[str1[i]] = 1;
      map1[str1[i]] = 1;
    }
  }

  // repeat for str2 and map 2
  for (let i = 0; i < str2.length; i++) {
    if (map[str2[i]]) {
      map[str2[i]] += 1;
      map2[str2[i]] += 1;
    } else {
      map[str2[i]] = 1;
      map2[str2[i]] = 1;
    }
  }

  /*
  If there is a value in map which is not an even number, then there was an odd number of a given character
  between the two strings, and they can not be permutations.

  Also, in the event there is an even number of a character in one string, and an even number of a different
  character in the other string we will get true as the strings are the same length but have unique characters
  and can not be permutations.

  To check for this we compare map1 and map2 to be sure each character occurs both strings.
  */

  for (let key in map) {
    if (
      map[key] % 2 !== 0 ||
      map1[key] === undefined ||
      map2[key] === undefined
    ) {
      result = false;
      break;
    }
  }

  return result;
}
