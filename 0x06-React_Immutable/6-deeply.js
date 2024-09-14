import { List, fromJS } from 'immutable';

// Function to deeply merge two objects and return a List of the merged values
export default function mergeDeeplyElements(page1, page2) {
  // Convert the plain objects to Immutable Maps
  const map1 = fromJS(page1);
  const map2 = fromJS(page2);

  // Deeply merge the two maps
  const mergedMap = map1.mergeDeep(map2);

  // Return the values of the merged map as a List
  return List(mergedMap.valueSeq());
}
