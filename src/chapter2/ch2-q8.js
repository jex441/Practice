"use strict";

/**
 * This algorithm simply stores each node it sees into a Set structure, if there
 * is a cycle then the first repeat we see will be the start of that cycle and
 * the value we should return.
 *
 * N = |list|
 * Time: O(N) - assumes Set is hashmap based so O(1) costs
 * Additional space: O(N)
 */
export function findStartOfLoopSet(list) {}
