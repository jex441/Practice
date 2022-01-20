"use strict";

/**
 * Count the number of spaces in the string to calculate the new length of the
 * string and move characters back where required replacing spaces with %20.
 *
 * input "Mr John Smith" => "['M','r','%','2','0','J','o','h','n','%','2','0','S','m','i','t','h']"
 *
 * @param  {string[]} url URL string as a character arra which will be updated in place
 * @return {string[]}     Updated URL character array
 */
export function encodeSpaces(url) {
  //Edge cases
  if (!url || !url.length) {
    return url;
  }

  // Empty object for map
  let map = {};

  // Loop through string, add it to map with a key that is its place in the string
  // If it is a space, log it in the map as %20 instead of " "
  for (let i = 0; i < url.length; i++) {
    if (url[i] === " ") {
      map[i] = "%20";
    } else {
      map[i] = url[i];
    }
  }

  // Empty string for result
  let result = "";

  // Build the string based on the key value pairing of the map
  for (let key in map) {
    result += map[key];
  }

  // Return result. Tests expect it to be in array form, not string, so split at "".
  return result.split("");
}

// Estimate of time complexity: O(n * 2)
// This is due to the fact that the length of the variable (url) is traversed two times.
