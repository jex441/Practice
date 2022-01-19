"use strict";

import { getLength } from "./helpers";

/**
 * Find out the length of the two lists first. If they intersect at some point
 * then the length of their tails will be the same and any difference in length
 * must be from before they intersect. If the lists are different lengths then
 * skip the difference in the longer list. Walk through both lists in step until
 * a node that is the same in both lists is found or the end of one of the lists
 * is reached.
 *
 * N = max(|list1|, |list2|)
 * Time: O(N)
 * Additional space: O(1)
 */
export function doIntersect(list1, list2) {}
