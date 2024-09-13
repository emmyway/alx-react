import { List, Map } from 'immutable';

// Function to concatenate two arrays and return a List
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

// Function to merge two objects and return a List with merged values
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  
  // Merge the two maps with preference to values from page2
  const mergedMap = map1.merge(map2);
  
  // Return the values as a List
  return List(mergedMap.valueSeq());
}
