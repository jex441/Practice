"use strict";

import { getLength } from "./helpers";

/**
 * First find out the length of the list, then walk through half of the list
 * pushing the values onto a stack. Once the middle is reached if the list had
 * an odd length then skip the middle element. After that walk to the end of the
 * list and compare node values to a value popped off the stack, if no mismatches
 * then the list is a palindrome.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(N)
 */
export function isPalindromeStack(list) {}

/**
 * First find out the length of the list, then walk to the middle of the list.
 * Once the middle is reached if the list had an odd length then skip the middle
 * element. Walk through the remainder of the list reversing the nodes until the
 * end is reached. Now start walking one pointer from the start of the list and
 * another from the end of the list walking towards the middle. Compare values
 * while moving towards the middle. Reverse the second half of the list back to
 * its original order while moving towards the middle.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
export function isPalindromeReverse(list) {}
