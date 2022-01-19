"use strict";

/**
 * Keep track of characters counts with a Map data structure, fail when
 * str2 has a character different to str2 or if any characters are left over
 * at the end.
 *
 * N = |str1| && M = |str2|
 * Time: O(N + M)
 * Additional space: O(N)
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
export function isPermutationMap(str1, str2) {
  let map = {};
  let result = true;

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (map[str1[i]]) {
      map[str1[i]] += 1;
    } else {
      map[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (map[str2[i]]) {
      map[str2[i]] += 1;
    } else {
      map[str2[i]] = 1;
    }
  }

  for (let key in map) {
    if (map[key] % 2 !== 0) {
      result = false;
      break;
    }
  }
  console.log(map);
  return result;
}
